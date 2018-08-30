import { theseShouldBeWithTheme } from './utils';

// icon placeholder
export const ICON_IDENTIFIER = /<% ICON_IDENTIFIER %>/g;
export const ICON_JSON = /<% ICON_JSON %>/g;
export const ICON_GETTER_FUNCTION = /<% ICON_GETTER_FUNCTION %>/g;
export const ICON_IMPORT_PATH = /<% ICON_IMPORT_PATH %>/g;
export const EXPORT_DEFAULT_COMPONENT_FROM_DIR = /<% EXPORT_DEFAULT_COMPONENT_FROM_DIR %>/g;
export const EXPORT_DEFAULT_MANIFEST = /<% EXPORT_DEFAULT_MANIFEST %>/g;
export const EXPORT_DEFAULT_MAPPER = /<% EXPORT_DEFAULT_MAPPER %>/g;

// manul map
export function getManulMapper(
  toKebabCase?: boolean
): { [key: string]: string } {
  return {
    ...theseShouldBeWithTheme(
      [
        'like',
        'dislike',
        'up-circle',
        'right-circle',
        'down-circle',
        'left-circle',
        'play-circle',
        'up-square',
        'right-square',
        'down-square',
        'left-square',
        'question-circle',
        'plus-circle',
        'pause-circle',
        'minus-circle',
        'plus-square',
        'minus-square',
        'info-circle',
        'exclamation-circle',
        'close-circle',
        'close-square',
        'check-circle',
        'check-square',
        'clock-circle',
        'pie-chart',
        'code',
        'cloud',
        'cloud-download',
        'frown',
        'meh',
        'smile',
        'tag',
        'tags',
        'pushpin',
        'star',
        'heart',
        'cloud-upload',
        'environment',
        'eye',
        'camera',
        'pay-circle',
        'android',
        'apple',
        'windows',
        'aliwangwang',
        'youtube',
        'skype',
        'gitlab',
        'linkedin',
        'facebook',
        'yuque',
        'html5',
        'appstore'
      ],
      'fill',
      toKebabCase
    )
  };
}
