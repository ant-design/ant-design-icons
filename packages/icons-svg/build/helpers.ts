import { upperFirst, camelCase, memoize } from 'lodash';
import { ThemeTypeUpperCase, ThemeType } from './templates/types';

export const getIdentifier = memoize(function getIdentifier({
  name,
  themeSuffix
}: {
  name: string;
  themeSuffix: ThemeTypeUpperCase;
}): string {
  return upperFirst(camelCase(`${name}-${themeSuffix}`));
});

export function getSrcByTheme(theme: ThemeType): string {
  return `svg/${theme}/*.svg`;
}

export function getDocsInlinePathByTheme(theme: ThemeType): string {
  return `docs/inline-svg/${theme}`;
}

export function getInlinePathByTheme(theme: ThemeType): string {
  return `inline-svg/${theme}`;
}

export {
  renderIconDefinitionToSVGElement,
  HelperRenderOptions
} from './templates/helpers';
