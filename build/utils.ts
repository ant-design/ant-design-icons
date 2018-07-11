export interface INode {
  nodeName: string;
  tagName?: string;
  attrs: Array<{ name: string, value: string }>;
  value?: string;
  childNodes: INode[];
}

export interface IAbstractTree {
  width: number;
  height: number;
  style?: string;
  children: Array<{ tag: string, attrs: { [key: string]: string } }>;
}

export interface IconDefinition extends IAbstractTree {
  name: string;
}

import assert = require('assert');

export function generateAbstractTree(node: INode, debugName?: string): IAbstractTree {
  assert(node, debugName);
  assert(node.tagName === 'svg', debugName);
  const viewBox = node.attrs.find(({ name }) => name === 'viewBox');
  assert(viewBox, debugName);
  const size: number[] = viewBox!.value.split(' ').slice(2).map((str) => Number.parseInt(str));
  assert(
    size.length === 2,
    `The size tuple should be [ width, height ], but got [ ${size[0]}, ${size[1]} ] [${debugName}]`
  );
  const styleNode = node.childNodes.find(({ tagName }) => tagName === 'style');
  let styleContent = '';
  if (styleNode) {
    styleContent = styleNode.childNodes[0].value || '';
  }
  const oneLevelPathNodes = node.childNodes
    .filter(({ nodeName, childNodes }) => nodeName !== 'style' && childNodes.length === 0);
  assert(oneLevelPathNodes.length >= 1, debugName);

  const p = oneLevelPathNodes.map(({ nodeName, attrs }) => ({
    tag: nodeName,
    attrs: attrs.reduce(
      (acc: { [key: string]: string }, { name, value }) => {
        acc[name] = value;
        return acc;
      }, {}
    )
  }));

  return {
    width: size[0],
    height: size[1],
    style: styleContent,
    children: p
  };
}

export function getSVGOPlugin() {
  return [{
    cleanupAttrs: true
  }, {
    removeDoctype: true
  }, {
    removeXMLProcInst: true
  }, {
    removeComments: true
  }, {
    removeMetadata: true
  }, {
    removeTitle: true
  }, {
    removeDesc: true
  }, {
    removeUselessDefs: true
  }, {
    removeEditorsNSData: true
  }, {
    removeEmptyAttrs: true
  }, {
    removeHiddenElems: true
  }, {
    removeEmptyText: true
  }, {
    removeEmptyContainers: true
  }, {
    removeViewBox: false
  }, {
    cleanupEnableBackground: true
  }, {
    convertStyleToAttrs: true
  }, {
    convertColors: true
  }, {
    convertPathData: true
  }, {
    convertTransform: true
  }, {
    removeUnknownsAndDefaults: true
  }, {
    removeNonInheritableGroupAttrs: true
  }, {
    removeUselessStrokeAndFill: true
  }, {
    removeUnusedNS: true
  }, {
    cleanupIDs: true
  }, {
    cleanupNumericValues: true
  }, {
    moveElemsAttrsToGroup: true
  }, {
    moveGroupAttrsToElems: true
  }, {
    collapseGroups: true
  }, {
    removeRasterImages: false
  }, {
    mergePaths: true
  }, {
    convertShapeToPath: true
  }, {
    sortAttrs: true
  }, {
    removeDimensions: true
  }];
}
