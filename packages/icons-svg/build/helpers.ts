import { upperFirst, camelCase, memoize } from 'lodash';
import { ThemeTypeUpperCase, ThemeType } from './templates/types';

export interface IdentifierMeta {
  name: string;
  themeSuffix?: ThemeTypeUpperCase;
}

export const getIdentifier = memoize(function getIdentifier({
  name,
  themeSuffix
}: IdentifierMeta): string {
  const suffix = themeSuffix ? `-${themeSuffix}` : '';
  return upperFirst(camelCase(name + suffix));
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
