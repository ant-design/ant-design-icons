import { generate as generateColor } from 'ant-design-palettes';
import { IconDefinition, ThemeType } from './types';

export const antIconConsolePrefix = '[@ant-design/icons-angular]: ';

export function printErr(message: string): void {
  console.error(`${antIconConsolePrefix}${message}.`);
}

export function printWarn(message: string): void {
  console.warn(`${antIconConsolePrefix}${message}.`);
}

export function getSecondaryColor(primaryColor: string): string {
  return generateColor(primaryColor)[0];
}

export function withSuffix(name: string, theme: ThemeType | undefined): string {
  switch (theme) {
    case 'fill': return `${name}-fill`;
    case 'outline': return `${name}-o`;
    case 'twotone': return `${name}-twotone`;
    case undefined: return name;
    default: throw new Error(`${antIconConsolePrefix}Theme "${theme}" is not a recognized theme!`);
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

export function isIconDefinition(target: string | IconDefinition): target is IconDefinition {
  return (
    typeof target === 'object' &&
    typeof target.name === 'string' &&
    (typeof target.theme === 'string' || target.theme === undefined) &&
    typeof target.icon === 'string'
  );
}

/**
 * Get an `IconDefinition` object from abbreviation type, like `account-book-fill`.
 * @param str
 */
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

/**
 * Parse inline SVG string and replace colors with placeholders. For twotone icons only.
 */
export function replaceFillColor(raw: string): string {
  return raw
    .replace(/['"]#333['"]/g, '"primaryColor"')
    .replace(/['"]#E6E6E6['"]/g, '"secondaryColor"')
    .replace(/['"]#D9D9D9['"]/g, '"secondaryColor"')
    .replace(/['"]#D8D8D8['"]/g, '"secondaryColor"');
}

/**
 * Split a name with namespace in it into a tuple like [ name, namespace ].
 */
export function getNameAndNamespace(type: string): [string, string] {
  const split = type.split(':');
  switch (split.length) {
    case 1: return [type, ''];
    case 2: return [split[1], split[0]];
    default: throw new Error(`${antIconConsolePrefix}The icon type ${type} is not valid!`);
  }
}

export function hasNamespace(type: string): boolean {
  return getNameAndNamespace(type)[1] !== '';
}
