export { getSecondaryColor } from './colorUtils';
export {
  generate,
  iconStyles,
  isIconDefinition,
  normalizeAttrs,
  svgBaseProps,
  useInsertStyles,
  warning,
} from './renderUtils';

export function normalizeTwoToneColors(
  twoToneColor: string | [string, string] | undefined,
): string[] {
  if (!twoToneColor) {
    return [];
  }

  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
