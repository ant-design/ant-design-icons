import { KitPlugin, ProxyPluginAPI, ExtraAsset, Asset } from '../../types';
import { emptyDir } from 'fs-extra';
import chalk from 'chalk';
import { relative } from 'path';

export default class GenerateCommandPlugin implements KitPlugin {
  namespace = 'build-in:generate-command';
  options?: object;
  constructor(options?: object) {
    this.options = options;
  }
  apply(api: ProxyPluginAPI, options?: object) {
    api.syncHooks.afterInitialized.tap(this.namespace, () => {
      api.syncHooks.beforeExtraAssetsTakingEffect.call();
      const extraAssets$Subsription = api.extraAssets$.subscribe({
        next: async (asset: ExtraAsset) => {
          api.syncHooks.beforeExtraAssetEmit.call(asset);
          await api.writeAsset(asset);
          if (!asset.to.absolute.endsWith('.svg')) {
            api.logger.scope(api.config!.name).complete(
              `Extra file ${chalk.underline.cyan(
                relative(api.config!.context, asset.to.absolute)
              )} is generated.`
            );
          }
        },
        complete: () => {
          api.syncHooks.onExtraAssetsComplete.call();
          api.logger.scope(api.config!.name).complete(
            `Extra assets is generated.`
          );
          extraAssets$Subsription.unsubscribe();
        }
      });
      api.syncHooks.afterExtraAssetsTakingEffect.call(extraAssets$Subsription);
    });

    api.registerCommand(
      'generate',
      async (args: object) => {
        if (api.assets$ && api.extraAssets$) {
          api.syncHooks.beforeAssetsTakingEffect.call();
          if (api.config!.destination) {
            await emptyDir(api.config!.destination);
          }

          return new Promise((resolve) => {
            const assets$Subscription = api.assets$!.subscribe({
              next: async (asset) => {
                api.syncHooks.beforeAssetEmit.call(asset);
                if (api.config!.destination && asset.to) {
                  await api.writeAsset(asset as Asset);
                }
              },
              complete: () => {
                api.syncHooks.onAssetsComplete.call();
                if (api.config!.destination) {
                  api.logger.scope(api.config!.name).complete(
                    `Done. The sources: ${chalk.underline.cyan(
                      '[ ' + api.config!.sources + ' ]'
                    )}.`
                  );
                } else {
                  api.logger.scope(api.config!.name).complete(
                    `Done. There is no file emitted. The sources: ${chalk.underline.cyan(
                      '[ ' + api.config!.sources + ' ]'
                    )}.`
                  );
                }
                assets$Subscription.unsubscribe();
                api.extraAssets$.complete();
                resolve();
              }
            });
            api.syncHooks.afterAssetsTakingEffect.call(assets$Subscription);
          });
        }
      },
      options
    );
  }
}
