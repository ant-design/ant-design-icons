import { blue } from '@ant-design/colors';
import generateColor from '@ant-design/colors/es/generate';

export const DEFAULT_TWOTONE_COLOR = blue.primary;

export function getSecondaryColor(primaryColor: string): string {
  // choose the second color
  return generateColor(primaryColor)[0];
}
