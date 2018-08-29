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
  readonly paths: {
    SVG_DIR: string;
    ICON_TEMPLATE: string;
    INDEX_TEMPLATE: string;
    MANIFEST_TEMPLATE: string;
    MAP_NAME_TO_IDENTIFIER_TEMPLATE: string;
    TWO_TONE_ICON_TEMPLATE: string;
    ICON_OUTPUT_DIR: string;
    THEME_FILL_OUTPUT: string;
    THEME_OUTLINE_OUTPUT: string;
    THEME_TWO_TONE_OUTPUT: string;
    INDEX_OUTPUT: string;
    MANIFEST_OUTPUT: string;
    MAP_NAME_TO_IDENTIFIER_OUTPUT: string;
  };
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
  theme: ThemeType;
}

export type IconDefinitionGetter = (
  primaryColor?: string,
  secondaryColor?: string
) => IconDefinition;

export interface NameAndPath {
  kebabCaseName: string;
  identifier: string;
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
