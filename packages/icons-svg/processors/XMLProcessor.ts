/// <reference types="../typings" />
import { KitProcessor, Asset, AssetPath } from '@ant-design/icon-kit';
import * as parseXml from '@rgrove/parse-xml';
import { SyncWaterfallHook } from 'tapable';
import { getThemeAccordingToDir } from '../utils';

// options see:
// https://github.com/rgrove/parse-xml#parsexmlxml-string-options-object--object
export interface XMLProcessorOptions {
  parser?: {
    ignoreUndefinedEntities?: boolean;
    preserveCdata?: boolean;
    preserveComments?: boolean;
    resolveUndefinedEntity?: Function;
  };
  shape?: 'icon-definition' | 'xml-node';
  extraNodeTransforms?: ((node: any) => any)[];
}

export interface XMLNode {
  type: string;
  name: string;
  attributes: {
    [key: string]: string;
  };
  children: XMLNode[];
}

export interface AbstractNode {
  tag: string;
  attrs: {
    [key: string]: string;
  };
  children?: AbstractNode[];
}

export interface IconDefinitionBase {
  name: string; // kebab-case-style
  theme: string;
  icon: AbstractNode;
}

export const oldIcons = [
  'step-backward',
  'step-forward',
  'fast-backward',
  'fast-forward',
  'forward',
  'backward',
  'caret-up',
  'caret-down',
  'caret-left',
  'caret-right',
  'retweet',
  'swap-left',
  'swap-right',
  'loading',
  'loading-3-quarters',
  'coffee',
  'bars',
  'file-jpg',
  'inbox',
  'shopping-cart',
  'safety',
  'medium-workmark'
];

export default class XMLProcessor implements KitProcessor {
  namespace = 'xml-processor';
  options: XMLProcessorOptions;
  extraNodeTransformsHooks = new SyncWaterfallHook(['nodeMeta']);
  postRootNodeTransformsHooks = new SyncWaterfallHook(['nodeMeta']);

  constructor(
    options: XMLProcessorOptions = {
      shape: 'xml-node'
    }
  ) {
    this.options = options;
    if (
      this.options.extraNodeTransforms &&
      Array.isArray(this.options.extraNodeTransforms)
    ) {
      this.options.extraNodeTransforms.forEach((tf, index) => {
        this.extraNodeTransformsHooks.tap(
          `${this.namespace}-extra-node-transform-at-${index}`,
          tf
        );
      });
    }

    if (this.options.shape === 'icon-definition') {
      this.postRootNodeTransformsHooks.tap(
        `icon-should-not-be-focusable`,
        (icond: IconDefinitionBase) => {
          if (icond.icon.tag === 'svg') {
            icond.icon.attrs.focusable = 'false';
          }
          return icond;
        }
      );

      this.postRootNodeTransformsHooks.tap(
        `icons-after-3.9.x-should-be-resize-viewbox`,
        (icond: IconDefinitionBase) => {
          if (icond.icon.tag === 'svg' && !oldIcons.includes(icond.name)) {
            icond.icon.attrs.viewBox = '64 64 896 896';
          }
          return icond;
        }
      );
    }
  }

  toAbstractNode({ name, attributes, children }: XMLNode): AbstractNode {
    const currentNode: AbstractNode = {
      tag: name,
      attrs: {
        ...attributes
      },
      children: children
        .map((child) =>
          child.type === 'element' ? this.toAbstractNode(child) : null
        )
        .filter(($) => Boolean($)) as AbstractNode[]
    };
    if (!(currentNode.children && currentNode.children.length)) {
      delete currentNode.children;
    }
    return this.extraNodeTransformsHooks.call(currentNode);
  }

  static toIconDefinitionBase(
    node: AbstractNode,
    from: AssetPath
  ): IconDefinitionBase {
    const theme = getThemeAccordingToDir(from.dir);
    return {
      name: from.name,
      theme,
      icon: node
    };
  }

  async transform({ content, from, to }: Asset) {
    const xmlTree: XMLNode = parseXml(
      content,
      this.options && this.options.parser
    );
    const xmlNode =
      xmlTree.type === 'document' ? (xmlTree.children[0] as XMLNode) : xmlTree;

    let nodeTransformed:
      | AbstractNode
      | XMLNode
      | IconDefinitionBase
      | null = null;
    switch (this.options.shape) {
      case 'icon-definition':
        nodeTransformed = this.toAbstractNode(xmlNode);
        break;
      case 'xml-node':
      default:
        nodeTransformed = xmlNode;
    }

    if (this.options.shape === 'icon-definition') {
      nodeTransformed = XMLProcessor.toIconDefinitionBase(
        nodeTransformed as AbstractNode,
        from
      );
    }

    nodeTransformed = this.postRootNodeTransformsHooks.call(nodeTransformed);

    return {
      content: JSON.stringify(nodeTransformed),
      from,
      to
    };
  }
}
