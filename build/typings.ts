import Prettier = require('prettier');
import SVGO = require('svgo');

export interface Node {
  nodeName: string;
  tagName?: string;
  attrs: Array<{ name: string; value: string }>;
  value?: string;
  childNodes: Node[];
}

export interface Environment {
  readonly paths: { [key: string]: string };
  readonly base: string;
  readonly options: {
    svgo: SVGO.Options;
    prettier: Prettier.Options;
  };
}

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
}

export type IconTheme = 'outlined' | 'two-tone' | 'filled';

export interface NameAndPath {
  kebabCaseName: string;
  identifier: string;
  svgFilePath: string;
}

export interface BuildTimeIconMetaData {
  identifier: string;
  icon: IconDefinition;
}

export interface WriteFileMetaData {
  path: string;
  content: string;
}

// svg folder names
export type ThemeType = 'fill' | 'outline' | 'twotone';
