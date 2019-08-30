import through from 'through2';
import File from 'vinyl';
import parseXML from '@rgrove/parse-xml';
import { SyncWaterfallHook } from 'tapable';
import { AbstractNode, ThemeType } from '../build/templates/types';

interface XMLNode {
  type: string;
  name: string;
  attributes: {
    [key: string]: string;
  };
  children: XMLNode[];
}

export interface IconDefinitionBase {
  name: string; // kebab-case-style
  theme: string;
  icon: AbstractNode;
}

export interface AbstractNodeAndIconName {
  abstractNode: AbstractNode;
  iconName: string;
}

interface IcondOptions {
  theme: ThemeType;
  extraNodeTransforms?: Array<
    (arg: AbstractNodeAndIconName) => AbstractNodeAndIconName
  >;
  stringify?: (iconDefinitionBase: IconDefinitionBase) => string;
}

export default function iconDefinition({
  theme,
  extraNodeTransforms = [],
  stringify = JSON.stringify
}: IcondOptions) {
  const extraNodeTransformsHooks = new SyncWaterfallHook([
    'AbstractNodeAndIconName'
  ]);

  for (const transform of extraNodeTransforms) {
    extraNodeTransformsHooks.tap(transform.name, transform);
  }

  function toAbstractNode(
    { name, attributes, children }: XMLNode,
    iconName: string
  ): AbstractNode {
    const currentNode: AbstractNode = {
      tag: name,
      attrs: {
        ...attributes
      },
      children: children
        .map((child) =>
          child.type === 'element' ? toAbstractNode(child, iconName) : null
        )
        .filter((_) => _) as AbstractNode[]
    };
    if (!(currentNode.children && currentNode.children.length)) {
      delete currentNode.children;
    }
    const { abstractNode } = extraNodeTransformsHooks.call({
      abstractNode: currentNode,
      iconName
    }) as AbstractNodeAndIconName;
    return abstractNode;
  }

  return through.obj(function(file: File, encoding, done) {
    if (file.isBuffer()) {
      const before = file.contents.toString(encoding);
      const XMLTree: XMLNode = parseXML(before);
      const XMLRootNode =
        XMLTree.type === 'document'
          ? (XMLTree.children[0] as XMLNode)
          : XMLTree;

      const iconName = file.stem;
      const abstractRootNode = toAbstractNode(XMLRootNode, iconName);
      const iconDefinitionBaseNode: IconDefinitionBase = {
        name: iconName,
        theme,
        icon: abstractRootNode
      };

      const icond = stringify(iconDefinitionBaseNode);
      file.contents = Buffer.from(icond);
      done(null, file);
    } else {
      done(null, file);
    }
  });
}
