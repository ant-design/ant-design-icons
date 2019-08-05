function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import { AsyncSeriesWaterfallHook, SyncHook, HookMap } from 'tapable';
import buildInPlugins from './plugins';
import * as signale from 'signale';
import PluginAPI from './PluginAPI';
import Command from './Command';
import debugFactory from 'debug';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil, map, concatAll, reduce } from 'rxjs/operators';
import { stream } from 'globby';
import { createReadStream, ensureDir, createWriteStream } from 'fs-extra';
import { parse, dirname } from 'path';
import { cloneDeep } from 'lodash';
import { getToPath } from './utils/getToPath';
const debug = debugFactory('service');
export const ProxyPropertyNames = Symbol('ProxyPropertyNamesInService');
export default class KitService {
  constructor(config) {
    var _this = this;

    this.preConfig = void 0;
    this.config = null;
    this.plugins = [];
    this.commands = new Map();
    this.assets$ = null;
    this.extraAssets$ = new Subject();
    this[ProxyPropertyNames] = ['registerCommand', 'registerPlugin', 'generateFiles', 'asyncHooks', 'syncHooks', 'config', 'assets$', 'extraAssets$', 'writeAsset'];
    this.extraPlugins = [];
    this.asyncHooks = {
      postProcessors: new AsyncSeriesWaterfallHook(['ensuredAsset'])
    };
    this.syncHooks = {
      beforeAssetEmit: new SyncHook(['asset']),
      beforeExtraAssetEmit: new SyncHook(['asset']),
      beforeAssetsTakingEffect: new SyncHook(),
      onAssetsComplete: new SyncHook(),
      afterAssetsTakingEffect: new SyncHook(['subscription']),
      beforeExtraAssetsTakingEffect: new SyncHook(),
      onExtraAssetsComplete: new SyncHook(),
      afterExtraAssetsTakingEffect: new SyncHook(['subscription']),
      beforeProcessor: new HookMap(() => new SyncHook(['processor', 'asset'])),
      afterProcessor: new HookMap(() => new SyncHook(['processor', 'assetProccessed'])),
      afterInitialized: new SyncHook(),
      afterConfigInitialized: new SyncHook(['config'])
    };
    this.processors = new AsyncSeriesWaterfallHook(['asset']);
    this.isInitialized = false;
    this.preConfig = config;
    this.processors.intercept({
      register: tapInfo => {
        const name = tapInfo.name,
              fn = tapInfo.fn;

        tapInfo.fn =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(function* (asset) {
            const beforeHook = _this.syncHooks.beforeProcessor.get(name);

            const afterHook = _this.syncHooks.afterProcessor.get(name);

            if (beforeHook) {
              beforeHook.call(asset);
            }

            const result = yield fn(asset);

            if (afterHook) {
              afterHook.call(result);
            }

            return result;
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }();

        return tapInfo;
      }
    });
  }

  initialize() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      _this2.initializePlugins();

      _this2.initializeConfig();

      _this2.initializeFlow();

      _this2.isInitialized = true;

      _this2.syncHooks.afterInitialized.call();
    })();
  }

  initializePlugins() {
    // resolve & initialize plugins
    if (this.preConfig) {
      const preloadConfigPlugins = this.preConfig.plugins || [];
      this.plugins = [...buildInPlugins, ...preloadConfigPlugins];
      debug(`Try to initialize ${this.plugins.length} plugins, ${preloadConfigPlugins.length} plugin(s) for user.`);
      this.plugins.forEach(plugin => {
        this.initializeOnePlugin(plugin);
      });
      let count = 0;

      while (this.extraPlugins.length) {
        const extraPlugins = cloneDeep(this.extraPlugins);
        this.extraPlugins = [];
        extraPlugins.forEach(plugin => {
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

  initializeOnePlugin(plugin) {
    const namespace = plugin.namespace,
          apply = plugin.apply,
          options = plugin.options;

    try {
      const taskName = this.config && this.config.name || this.preConfig && this.preConfig.name || 'unknown-task';
      const rawApi = new PluginAPI(namespace, taskName);
      const api = new Proxy(rawApi, {
        get: (target, property) => {
          if (typeof property === 'string' && this[ProxyPropertyNames].includes(property)) {
            let result = this[property];

            if (typeof result === 'function') {
              result = result.bind(this);
            } // or return Object.freeze(result) ?


            return result;
          }

          return target[property];
        }
      });
      apply.call(plugin, api, options);
    } catch (e) {
      signale.error(e);
      process.exit(1);
    }
  }

  initializeConfig() {
    // todo
    // no Object.assign(...)
    // apply plugins
    const tempConfig = Object.freeze(this.preConfig);
    const config = Object.assign({}, {
      context: process.cwd(),
      flow: [],
      plugins: []
    }, tempConfig);
    this.config = Object.freeze(config);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.config.flow[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        const processor = _step.value;

        if (processor) {
          this.processors.tapPromise(processor.namespace, processor.transform.bind(processor));
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    this.syncHooks.afterConfigInitialized.call(this.config);
  }

  initializeFlow() {
    const pathStream = stream(this.config.sources, {
      cwd: this.config.context,
      absolute: true
    }).setEncoding('utf8');
    this.assets$ = fromEvent(pathStream, 'data').pipe(takeUntil(fromEvent(pathStream, 'end'))).pipe(map(path => {
      const s = createReadStream(path, 'utf8'); // optimize when no destination

      if (!this.config.destination) {
        return Promise.resolve({
          from: _objectSpread({}, parse(path), {
            absolute: path
          }),
          to: void 0,
          content: ''
        });
      }

      return fromEvent(s, 'data').pipe(takeUntil(fromEvent(s, 'end'))).pipe(reduce((acc, chunk) => acc + chunk), map(content => ({
        from: _objectSpread({}, parse(path), {
          absolute: path
        }),
        to: void 0,
        content
      })));
    }), concatAll()).pipe(map(asset => {
      if (!this.config.destination) {
        return asset;
      }

      const from = asset.from,
            content = asset.content;
      return {
        from,
        to: getToPath({
          destination: this.config.destination,
          from,
          configContext: this.config.context,
          relativeBase: this.config.relativeBase
        }),
        content
      };
    })).pipe(map(asset => {
      return this.processors.promise(asset);
    }), concatAll()).pipe(map(asset => {
      return this.asyncHooks.postProcessors.promise(asset);
    }), concatAll());
  }

  run(command, args) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      yield _this3.initialize();
      return _this3.runCommand(command, args);
    })();
  }

  registerCommand(commandName, executor, options) {
    if (this.commands.has(commandName)) {
      signale.error(`Command ${commandName} exists!`);
      return;
    }

    this.commands.set(commandName, new Command({
      name: commandName,
      executor,
      options
    }));
  }

  registerPlugin(plugin) {
    if (plugin && typeof plugin.apply === 'function' && typeof plugin.namespace === 'string') {
      this.extraPlugins.push(plugin);
    }
  }

  runCommand(name, args) {
    const command = this.commands.get(name);

    if (!command) {
      signale.error(`Command ${name} does NOT exists.`);
      process.exit(1);
    }

    const _ref2 = command,
          executor = _ref2.executor,
          options = _ref2.options;

    if (options) {
      // do something with options
      debug(`The Command ${name} with the options`, options);
    }

    return executor(args);
  }

  writeAsset(asset) {
    return _asyncToGenerator(function* () {
      const to = asset.to,
            content = asset.content;
      yield ensureDir(dirname(to.absolute));
      const writeStream = createWriteStream(to.absolute, 'utf8');
      writeStream.write(content);
      writeStream.end();
    })();
  }

}