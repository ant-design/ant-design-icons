import { KitProcessor, Asset } from '@ant-design/icon-kit';
import { template } from 'lodash';
import { readFile } from 'fs-extra';

export interface TemplateProcessorOptions {
  tplSrc: string;
  mapAssetPropsToInterpolate: (asset: Asset) => object;
}

export default class TemplateProcessor implements KitProcessor {
  namespace = 'template-processor';
  options: TemplateProcessorOptions;

  constructor(options: TemplateProcessorOptions) {
    this.options = options;
  }

  async transform(asset: Asset) {
    const { content, ...rest } = asset;
    const f = template(await readFile(this.options.tplSrc, 'utf8'));
    return {
      content: f(this.options.mapAssetPropsToInterpolate(asset)),
      ...rest
    };
  }
}
