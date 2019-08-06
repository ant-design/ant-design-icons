import { KitPlugin, ProxyPluginAPI } from '@ant-design/icon-kit';
import {
  getIdentifierAccordingToNameAndDir,
  getAssetPathFromAbsolute
} from '../utils';
import { resolve } from 'path';

export interface RenameIconByThemePluginOptions {
  ext: string;
}

export default class RenameIconByThemePlugin implements KitPlugin {
  namespace = 'attach-theme-to-icon-plugin';
  options: RenameIconByThemePluginOptions;
  constructor(o: RenameIconByThemePluginOptions) {
    this.options = o;
  }
  apply(api: ProxyPluginAPI) {
    api.asyncHooks.postProcessors.tapPromise(
      this.namespace,
      async ({ from, content }) => {
        const identifier = getIdentifierAccordingToNameAndDir(from);
        const filename = identifier + this.options.ext;
        const absolute = resolve(api.config!.destination, filename);
        return {
          from,
          to: getAssetPathFromAbsolute(absolute),
          content
        };
      }
    );
  }
}
