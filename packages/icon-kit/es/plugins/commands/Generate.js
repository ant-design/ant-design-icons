function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import { emptyDir } from 'fs-extra';
import chalk from 'chalk';
import { relative } from 'path';
export default class GenerateCommandPlugin {
  constructor(options) {
    this.namespace = 'build-in:generate-command';
    this.options = void 0;
    this.options = options;
  }

  apply(api, options) {
    api.syncHooks.afterInitialized.tap(this.namespace, () => {
      api.syncHooks.beforeExtraAssetsTakingEffect.call();
      let count = 0;
      const extraAssets$Subsription = api.extraAssets$.subscribe({
        next: function () {
          var _next2 = _asyncToGenerator(function* (asset) {
            api.syncHooks.beforeExtraAssetEmit.call(asset);
            yield api.writeAsset(asset);
            count++;

            if (!asset.to.absolute.endsWith('.svg')) {
              api.logger.scope(api.config.name).complete(`Extra file ${chalk.underline.cyan(relative(api.config.context, asset.to.absolute))} is generated.`);
            }
          });

          function next(_x) {
            return _next2.apply(this, arguments);
          }

          return next;
        }(),
        complete: () => {
          api.syncHooks.onExtraAssetsComplete.call();
          api.logger.scope(api.config.name).complete(`Extra ${count} asset(s) are generated.`);
          extraAssets$Subsription.unsubscribe();
        }
      });
      api.syncHooks.afterExtraAssetsTakingEffect.call(extraAssets$Subsription);
    });
    api.registerCommand('generate',
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(function* (args) {
        if (api.assets$ && api.extraAssets$) {
          api.syncHooks.beforeAssetsTakingEffect.call();

          if (api.config.destination) {
            yield emptyDir(api.config.destination);
          }

          return new Promise(resolve => {
            let count = 0;
            const assets$Subscription = api.assets$.subscribe({
              next: function () {
                var _next3 = _asyncToGenerator(function* (asset) {
                  api.syncHooks.beforeAssetEmit.call(asset);

                  if (api.config.destination && asset.to) {
                    yield api.writeAsset(asset);
                    count++;
                  }
                });

                function next(_x3) {
                  return _next3.apply(this, arguments);
                }

                return next;
              }(),
              complete: () => {
                api.syncHooks.onAssetsComplete.call();

                if (api.config.destination) {
                  api.logger.scope(api.config.name).complete(`Done. ${count} asset(s) are generated. The sources: ${chalk.underline.cyan('[ ' + api.config.sources + ' ]')}.`);
                } else {
                  api.logger.scope(api.config.name).complete(`Done. There is no file emitted. The sources: ${chalk.underline.cyan('[ ' + api.config.sources + ' ]')}.`);
                }

                assets$Subscription.unsubscribe();
                api.extraAssets$.complete();
                resolve();
              }
            });
            api.syncHooks.afterAssetsTakingEffect.call(assets$Subscription);
          });
        }
      });

      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }(), options);
  }

}