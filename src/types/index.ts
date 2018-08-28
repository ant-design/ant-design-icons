export interface AbstractNode {
  tag: string;
  attrs: {
    [key: string]: string;
  };
  children: AbstractNode[];
}

export interface IconDefinition extends AbstractNode {
  name: string; // kebab-case-style
  // theme: IconTheme;
}

export type IconTheme = 'outlined' | 'two-tone' | 'default';
