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

export interface IconDefinition extends AbstractTree {
  name: string;
}
