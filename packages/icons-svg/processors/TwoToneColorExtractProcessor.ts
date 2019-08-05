import { KitProcessor, Asset } from '@ant-design/icon-kit';

export interface TwoToneColorExtractProcessorOptions {
  primaryColors: string[];
  secondaryColors: string[];
}

export default class TwoToneColorExtractProcessor implements KitProcessor {
  namespace = 'twotone-color-extract-processor';
  options: TwoToneColorExtractProcessorOptions;
  primaryColorR: RegExp;
  secondaryColorR: RegExp;
  constructor(options: TwoToneColorExtractProcessorOptions) {
    this.options = options;
    this.primaryColorR = new RegExp(
      this.options.primaryColors.map((color) => `['"]${color}['"]`).join('|'),
      'g'
    );
    this.secondaryColorR = new RegExp(
      this.options.secondaryColors.map((color) => `['"]${color}['"]`).join('|'),
      'g'
    );
  }
  static replaceFillColor(raw: string, [p, s]: [RegExp, RegExp]): string {
    const fnTpl =
      `function (primaryColor: string, secondaryColor: string) {` +
      ` return ${raw
        .replace(p, 'primaryColor')
        .replace(s, 'secondaryColor')};` +
      ` }`;
    return fnTpl;
  }

  async transform({ content, from, to }: Asset) {
    const json = JSON.parse(content);
    const jsonWithFunctionPlaceholder = JSON.stringify({
      ...json,
      icon: '{{ FUNCTION }}'
    });
    return {
      from,
      to,
      content: jsonWithFunctionPlaceholder.replace(
        '"{{ FUNCTION }}"',
        TwoToneColorExtractProcessor.replaceFillColor(
          JSON.stringify(json.icon),
          [this.primaryColorR, this.secondaryColorR]
        )
      )
    };
  }
}
