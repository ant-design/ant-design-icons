import {
  KitPlugin,
  ProxyPluginAPI,
  Asset,
  getToPath
} from '@ant-design/icon-kit';
import {
  HelperRenderOptions,
  renderIconDefinitionToSVGElement
} from '../utils';
import { IconDefinition } from '../templates/types';

export interface GenerateInlineSVGPluginOptions extends HelperRenderOptions {
  objectLikeSourceProcessorName: string;
  destination: string;
}

export default class GenerateInlineSVGPlugin implements KitPlugin {
  namespace = 'generate-inline-svg-plugin';
  options: GenerateInlineSVGPluginOptions;
  constructor(o: GenerateInlineSVGPluginOptions) {
    this.options = o;
  }

  apply(api: ProxyPluginAPI) {
    api.syncHooks.afterConfigInitialized.tap(this.namespace, () => {
      api.syncHooks.afterProcessor
        .for(this.options.objectLikeSourceProcessorName)
        .tap(this.namespace, ({ from, content }: Asset) => {
          const icond = new Function(`return ${content}`)() as IconDefinition;
          const svg = renderIconDefinitionToSVGElement(icond);

          api.extraAssets$.next({
            to: getToPath({
              destination: this.options.destination,
              from,
              configContext: api.config!.context,
              relativeBase: api.config!.relativeBase
            }),
            content: svg
          });
        });
    });
  }
}
