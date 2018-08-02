import SVGO = require('svgo');

export interface Node {
  nodeName: string;
  tagName?: string;
  attrs: Array<{ name: string, value: string }>;
  value?: string;
  childNodes: Node[];
}

export interface AbstractTree {
  width: number;
  height: number;
  style?: string;
  children: Array<{ tag: string, attrs: { [key: string]: string } }>;
}

export interface Environment {
  readonly paths: { [key: string]: string };
  readonly base: string;
  readonly options: {
    svgo: SVGO.Options
  };
}

export interface IconDefinition extends AbstractTree {
  name: string;
}
