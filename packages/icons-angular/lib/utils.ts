import { generate as generateColor } from 'ant-design-palettes';
import { IconDefinition, ThemeType } from './types';

export function printErr(message: string) {
  console.error(`[@ant-design/icons-angular]: ${message}.`);
}

export function printWarn(message: string) {
  console.warn(`[@ant-design/icons-angular]: ${message}.`);
}

/**
 * Use ant-design-palettes to generate a secondary color.
 */
export function getSecondaryColor(primaryColor: string): string {
  return generateColor(primaryColor)[0];
}

/**
 * Append a theme suffix to a type.
 */
export function withSuffix(name: string, theme: ThemeType): string {
  switch (theme) {
    case 'fill':
      return `${name}-fill`;
    case 'outline':
      return `${name}-o`;
    case 'twotone':
      return `${name}-twotone`;
    default:
      throw new TypeError(`Unknown theme type: ${theme}, name: ${name}`);
  }
}

export function withSuffixAndColor(name: string, theme: ThemeType, pri: string, sec: string): string {
  return `${withSuffix(name, theme)}-${pri}-${sec}`;
}

export function mapAbbrToTheme(abbr: string): ThemeType {
  return abbr === 'o' ? 'outline' : abbr as ThemeType;
}

export function alreadyHasAThemeSuffix(name: string): boolean {
  return name.endsWith('-fill') || name.endsWith('-o') || name.endsWith('-twotone');
}

export function isIconDefinition(target: any): target is IconDefinition {
  return (
    typeof target === 'object' &&
    typeof target.name === 'string' &&
    typeof target.theme === 'string' &&
    // IconDefinition.icon could be a SVG: We render SVG only once (the first time a icon is used)
    // and return a copy every time after that.
    (target.icon instanceof SVGElement || typeof target.icon === 'string')
  );
}

export function getIconDefinitionFromAbbr(str: string): IconDefinition {
  const arr = str.split('-');
  const theme = mapAbbrToTheme(arr.splice(arr.length - 1, 1)[0]);
  const name = arr.join('-');

  return {
    name,
    theme,
    icon: ''
  } as IconDefinition;
}

export function cloneSVG(svg: SVGElement): SVGElement {
  return svg.cloneNode(true) as SVGElement;
}

export function replaceFillColor(raw: string): string {
  return raw
    .replace(/['"]#333['"]/g, '"primaryColor"')
    .replace(/['"]#E6E6E6['"]/g, '"secondaryColor"')
    .replace(/['"]#D9D9D9['"]/g, '"secondaryColor"')
    .replace(/['"]#D8D8D8['"]/g, '"secondaryColor"');
}
