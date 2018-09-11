import { ThemeType } from '@ant-design/icons/lib/types';

export { IconDefinition, ThemeType } from '@ant-design/icons/lib/types';

export interface StringifyIconDefinition {
  name: string;
  theme: ThemeType;
  icon: string;
}

export interface Manifest {
  fill: string[];
  outline: string[];
  twotone: string[];
}

export interface CachedIconDefinition {
  name: string;
  theme: string;
  icon: SVGElement;
}

export interface TwoToneColorPaletteSetter {
  primaryColor: string;
  secondaryColor?: string;
}

export interface TwoToneColorPalette extends TwoToneColorPaletteSetter {
  secondaryColor: string;
}
