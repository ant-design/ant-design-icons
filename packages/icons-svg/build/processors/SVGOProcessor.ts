import { KitProcessor, Asset } from '@ant-design/icon-kit';
import SVGO from 'svgo';

export interface SVGOProcessorOptions {
  svgo: SVGO.Options;
}

export default class SVGOProcessor implements KitProcessor {
  namespace = 'svgo-processor';
  options: SVGOProcessorOptions;
  optimizer: SVGO;
  constructor(options: SVGOProcessorOptions) {
    this.options = options;
    this.optimizer = new SVGO(this.options.svgo);
  }

  async transform({ content, ...rest }: Asset) {
    const { data } = await this.optimizer.optimize(content);
    return {
      ...rest,
      content: data
    };
  }
}
