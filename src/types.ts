export interface AbstractNode {
  tag: string;
  attrs: {
    [key: string]: string;
  };
  children: AbstractNode[];
}

export interface IconDefinition extends AbstractNode {
  name: string; // kebab-case-style
  theme: ThemeType;
  nameWithTheme: string;
}

export type ThemeType = 'fill' | 'outline' | 'twotone';

export interface IconDefinitionGetter {
  (primaryColor: string, secondaryColor: string): IconDefinition;
  nameWithTheme: string;
}

export interface Manifest {
  fill: string[];
  outline: string[];
  twotone: string[];
}
