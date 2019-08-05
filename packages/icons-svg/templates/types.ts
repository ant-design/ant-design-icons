export interface AbstractNode {
  tag: string;
  attrs: {
    [key: string]: string | boolean;
  };
  children?: AbstractNode[];
}

export interface IconDefinition {
  name: string; // kebab-case-style
  theme: ThemeType;
  icon:
    | ((primaryColor: string, secondaryColor: string) => AbstractNode)
    | AbstractNode;
}

export type ThemeType = 'fill' | 'outline' | 'twotone';
