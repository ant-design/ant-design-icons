export interface AbstractNode {
  tag: string;
  attrs: {
    [key: string]: string;
  };
  children: AbstractNode[];
}

export interface IconDefinition extends AbstractNode {
  name: string; // kebab-case-style
  theme: IconTheme;
  nameWithTheme: string;
}

export type IconTheme = 'outline' | 'twotone' | 'fill';

export interface IconDefinitionGetter {
  (primaryColor: string, secondaryColor: string): IconDefinition;
  nameWithTheme: string;
}
