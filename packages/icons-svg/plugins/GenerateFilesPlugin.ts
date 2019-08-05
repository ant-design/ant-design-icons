import { KitPlugin, ProxyPluginAPI } from '@ant-design/icon-kit';
import { readFileSync } from 'fs-extra';
import { getAssetPathFromAbsolute } from '../utils';

export type GenerateFilesPluginOptions = Array<{
  output: string;
  data?: string;
  dataSource?: string;
}>;

export default class GenerateFilesPlugin implements KitPlugin {
  namespace = 'generate-files-plugin';
  options: GenerateFilesPluginOptions;
  constructor(o: GenerateFilesPluginOptions) {
    this.options = o;
  }

  apply(api: ProxyPluginAPI) {
    api.syncHooks.afterInitialized.tap(this.namespace, () => {
      this.options.forEach(({ output, data, dataSource }) => {
        const content =
          data || (dataSource && readFileSync(dataSource, 'utf8')) || '';
        api.extraAssets$.next({
          to: getAssetPathFromAbsolute(output),
          content
        });
      });
    });
  }
}
