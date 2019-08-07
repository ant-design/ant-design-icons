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

interface IcondOptions {
  theme: string;
  mergeAttrs?: (
    iconDefinition: IconDefinitionBase
  ) => { [key: string]: string };
}

export default function icond({ theme, mergeAttrs }: IcondOptions) {
  const extraNodeTransformsHooks = new SyncWaterfallHook(['abstractNode']);
  const postRootNodeTransformsHooks = new SyncWaterfallHook([
    'iconDefinitionBaseNode'
  ]);

  if (typeof mergeAttrs === 'function') {
    postRootNodeTransformsHooks.tap(
      'mergeAttrs',
      (iconDefinitionBaseNode: IconDefinitionBase) => {
        if (
          iconDefinitionBaseNode &&
          iconDefinitionBaseNode.icon &&
          iconDefinitionBaseNode.icon.tag === 'svg'
        ) {
          const attrs = mergeAttrs(iconDefinitionBaseNode);
          iconDefinitionBaseNode.icon.attrs = {
            ...iconDefinitionBaseNode.icon.attrs,
            ...attrs
          };
        }
        return iconDefinitionBaseNode;
      }
    );
  }

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
        .filter((_) => _) as AbstractNode[]
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
      let iconDefinitionBaseNode: IconDefinitionBase = {
        name: file.stem,
        theme,
        icon: abstractRootNode
      };
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
