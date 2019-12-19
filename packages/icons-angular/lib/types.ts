export interface IconDefinition {
  name: string; // kebab-case-style
  theme?: ThemeType | undefined;
  icon: string;
}

// svg folder names
export type ThemeType = 'filled' | 'outlined' | 'twotone';

export interface Manifest {
  filled: string[];
  outlined: string[];
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
