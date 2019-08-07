import through from 'through2';
import File from 'vinyl';
import parseXML from '@rgrove/parse-xml';
import { SyncWaterfallHook } from 'tapable';

interface XMLNode {
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

export default function icond() {
  const extraNodeTransformsHooks = new SyncWaterfallHook(['abstractNode']);
  const postRootNodeTransformsHooks = new SyncWaterfallHook([
    'iconDefinitionBaseNode'
  ]);

  function toAbstractNode({
    name,
    attributes,
    children
  }: XMLNode): AbstractNode {
    const currentNode: AbstractNode = {
      tag: name,
      attrs: {
        ...attributes
      },
      children: children
        .map((child) =>
          child.type === 'element' ? toAbstractNode(child) : null
        )
        .filter(($) => Boolean($)) as AbstractNode[]
    };
    if (!(currentNode.children && currentNode.children.length)) {
      delete currentNode.children;
    }
    return extraNodeTransformsHooks.call(currentNode);
  }

  return through.obj(function(file: File, encoding, done) {
    if (file.isBuffer()) {
      const before = file.contents.toString(encoding);
      const XMLTree: XMLNode = parseXML(before);
      const XMLRootNode =
        XMLTree.type === 'document'
          ? (XMLTree.children[0] as XMLNode)
          : XMLTree;

      const abstractRootNode = toAbstractNode(XMLRootNode);
      let iconDefinitionBaseNode = toIconDefinitionBase(abstractRootNode, file);
      iconDefinitionBaseNode = postRootNodeTransformsHooks.call(
        iconDefinitionBaseNode
      );

      const icond = JSON.stringify(iconDefinitionBaseNode);
      file.contents = Buffer.from(icond);
      done(null, file);
    } else {
      done(null, file);
    }
  });
}

function toIconDefinitionBase(
  node: AbstractNode,
  { basename, path }: Pick<File, 'basename' | 'path'>
): IconDefinitionBase {
  const theme = path;
  return {
    name: basename || 'un name',
    theme: theme || 'un theme',
    icon: node
  };
}
