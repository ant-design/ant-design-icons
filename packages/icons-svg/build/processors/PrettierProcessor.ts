import { KitProcessor, Asset } from '@ant-design/icon-kit';
import * as Prettier from 'prettier';

export interface PrettierProcessorOptions {
  prettier: Prettier.Options;
}

export default class PrettierProcessor implements KitProcessor {
  namespace = 'prettier-processor';
  options: PrettierProcessorOptions;
  constructor(options: PrettierProcessorOptions) {
    this.options = options;
  }

  async transform({ content, ...rest }: Asset) {
    return {
      ...rest,
      content: Prettier.format(content, this.options.prettier)
    };
  }
}
