import {
  KitPlugin,
  ProxyPluginAPI,
  KitConfig,
  Asset,
  KitFullConfig,
  ExtraAsset,
  UnensuredAsset
} from './types';
import { AsyncSeriesWaterfallHook, SyncHook, HookMap } from 'tapable';
import buildInPlugins from './plugins';
import * as signale from 'signale';
import PluginAPI from './PluginAPI';
import Command from './Command';
import debugFactory from 'debug';
import { Observable, fromEvent, Subject } from 'rxjs';
import { takeUntil, map, concatAll, reduce } from 'rxjs/operators';
import { stream } from 'globby';
import { createReadStream, ensureDir, createWriteStream } from 'fs-extra';
import { parse, dirname } from 'path';
import { cloneDeep } from 'lodash';
import { getToPath } from './utils/getToPath';

const debug = debugFactory('service');

export const ProxyPropertyNames = Symbol('ProxyPropertyNamesInService');

export default class KitService {
  private preConfig: KitConfig;
  public config: KitFullConfig | null = null;
  private plugins: KitPlugin[] = [];
  private commands: Map<string, Command> = new Map();
  public assets$: Observable<Asset | UnensuredAsset> | null = null;
  public extraAssets$: Subject<ExtraAsset> = new Subject();
  private [ProxyPropertyNames]: string[] = [
    'registerCommand',
    'registerPlugin',
    'generateFiles',
    'asyncHooks',
    'syncHooks',
    'config',
    'assets$',
    'extraAssets$',
    'writeAsset'
  ];
  private extraPlugins: KitPlugin[] = [];
  public asyncHooks = {
    postProcessors: new AsyncSeriesWaterfallHook(['ensuredAsset'])
  };
  public syncHooks = {
    beforeAssetEmit: new SyncHook(['asset']),
    beforeExtraAssetEmit: new SyncHook(['asset']),
    beforeAssetsTakingEffect: new SyncHook(),
    onAssetsComplete: new SyncHook(),
    afterAssetsTakingEffect: new SyncHook(['subscription']),
    beforeExtraAssetsTakingEffect: new SyncHook(),
    onExtraAssetsComplete: new SyncHook(),
    afterExtraAssetsTakingEffect: new SyncHook(['subscription']),
    beforeProcessor: new HookMap(() => new SyncHook(['processor', 'asset'])),
    afterProcessor: new HookMap(
      () => new SyncHook(['processor', 'assetProccessed'])
    ),
    afterInitialized: new SyncHook(),
    afterConfigInitialized: new SyncHook(['config'])
  };
  private processors: AsyncSeriesWaterfallHook = new AsyncSeriesWaterfallHook([
    'asset'
  ]);
  private isInitialized: boolean = false;
  constructor(config: KitConfig) {
    this.preConfig = config;
    this.processors.intercept({
      register: (tapInfo) => {
        const { name, fn } = tapInfo;

        tapInfo.fn = async (asset: any) => {
          const beforeHook = this.syncHooks.beforeProcessor.get(name);
          const afterHook = this.syncHooks.afterProcessor.get(name);
          if (beforeHook) {
            beforeHook.call(asset);
          }
          const result = await fn(asset);
          if (afterHook) {
            afterHook.call(result);
          }
          return result;
        };
        return tapInfo;
      }
    });
  }

  private async initialize() {
    this.initializePlugins();
    this.initializeConfig();
    this.initializeFlow();
    this.isInitialized = true;
    this.syncHooks.afterInitialized.call();
  }

  private initializePlugins() {
    // resolve & initialize plugins
    if (this.preConfig) {
      const preloadConfigPlugins = this.preConfig.plugins || [];
      this.plugins = [...buildInPlugins, ...preloadConfigPlugins];
      debug(
        `Try to initialize ${this.plugins.length} plugins, ${preloadConfigPlugins.length} plugin(s) for user.`
      );
      this.plugins.forEach((plugin) => {
        this.initializeOnePlugin(plugin);
      });

      let count = 0;
      while (this.extraPlugins.length) {
        const extraPlugins = cloneDeep(this.extraPlugins);
        this.extraPlugins = [];
        extraPlugins.forEach((plugin) => {
          this.initializeOnePlugin(plugin);
          this.plugins.push(plugin);
        });
        count++;
        if (count > 10) {
          throw new Error(`Circle detected in registering extra plugins.`);
        }
      }

      debug(`Initialzie plugins successfully!`);
    }
  }

  private initializeOnePlugin(plugin: KitPlugin) {
    const { namespace, apply, options } = plugin;
    try {
      const taskName =
        (this.config && this.config.name) ||
        (this.preConfig && this.preConfig.name) ||
        'unknown-task';
      const rawApi = new PluginAPI(namespace, taskName);
      const api = new Proxy(rawApi, {
        get: (target, property) => {
          if (
            typeof property === 'string' &&
            this[ProxyPropertyNames].includes(property)
          ) {
            let result = (this as any)[property];
            if (typeof result === 'function') {
              result = result.bind(this);
            }
            // or return Object.freeze(result) ?
            return result;
          }
          return (target as any)[property];
        }
      }) as ProxyPluginAPI;
      apply.call(plugin, api, options);
    } catch (e) {
      signale.error(e);
      process.exit(1);
    }
  }

  private initializeConfig() {
    // todo
    // no Object.assign(...)
    // apply plugins
    const tempConfig = Object.freeze(this.preConfig);
    const config = Object.assign(
      {},
      {
        context: process.cwd(),
        flow: [],
        plugins: []
      },
      tempConfig
    ) as KitFullConfig;
    this.config = Object.freeze(config);

    for (const processor of this.config.flow) {
      if (processor) {
        this.processors.tapPromise(
          processor.namespace,
          processor.transform.bind(processor)
        );
      }
    }

    this.syncHooks.afterConfigInitialized.call(this.config);
  }

  private initializeFlow() {
    const pathStream = stream(this.config!.sources, {
      cwd: this.config!.context,
      absolute: true
    }).setEncoding('utf8');
    this.assets$ = fromEvent<string>(pathStream, 'data')
      .pipe(takeUntil(fromEvent(pathStream, 'end')))
      .pipe(
        map((path) => {
          const s = createReadStream(path, 'utf8');

          // optimize when no destination
          if (!this.config!.destination) {
            return Promise.resolve({
              from: {
                ...parse(path),
                absolute: path
              },
              to: void 0,
              content: ''
            });
          }
          return fromEvent<string>(s, 'data')
            .pipe(takeUntil(fromEvent(s, 'end')))
            .pipe(
              reduce((acc, chunk) => acc + chunk),
              map<string, UnensuredAsset>((content) => ({
                from: {
                  ...parse(path),
                  absolute: path
                },
                to: void 0,
                content
              }))
            );
        }),
        concatAll()
      )
      .pipe(
        map<UnensuredAsset, Asset | UnensuredAsset>((asset) => {
          if (!this.config!.destination) {
            return asset;
          }
          const { from, content } = asset;
          return {
            from,
            to: getToPath({
              destination: this.config!.destination,
              from,
              configContext: this.config!.context
            }),
            content
          } as Asset;
        })
      )
      .pipe(
        map<Asset | UnensuredAsset, Promise<Asset | UnensuredAsset>>(
          (asset) => {
            return this.processors.promise(asset);
          }
        ),
        concatAll()
      )

      .pipe(
        map<Asset | UnensuredAsset, Promise<Asset | UnensuredAsset>>(
          (asset) => {
            return this.asyncHooks.postProcessors.promise(asset);
          }
        ),
        concatAll()
      );
  }

  public async run(command: string, args: object) {
    await this.initialize();
    return this.runCommand(command, args);
  }

  public registerCommand(
    commandName: string,
    executor: Function,
    options?: object
  ): void {
    if (this.commands.has(commandName)) {
      signale.error(`Command ${commandName} exists!`);
      return;
    }
    this.commands.set(
      commandName,
      new Command({
        name: commandName,
        executor,
        options
      })
    );
  }

  public registerPlugin(plugin: KitPlugin) {
    if (
      plugin &&
      typeof plugin.apply === 'function' &&
      typeof plugin.namespace === 'string'
    ) {
      this.extraPlugins.push(plugin);
    }
  }

  private runCommand(name: string, args: object) {
    const command = this.commands.get(name);
    if (!command) {
      signale.error(`Command ${name} does NOT exists.`);
      process.exit(1);
    }

    const { executor, options } = command!;

    if (options) {
      // do something with options
      debug(`The Command ${name} with the options`, options);
    }
    return executor(args);
  }

  public async writeAsset(asset: ExtraAsset) {
    const { to, content } = asset;
    await ensureDir(dirname(to.absolute));
    const writeStream = createWriteStream(to.absolute, 'utf8');
    writeStream.write(content);
    writeStream.end();
  }
}
