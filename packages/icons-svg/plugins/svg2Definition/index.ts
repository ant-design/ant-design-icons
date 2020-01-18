import { createTrasformStream } from '../creator';
import { ThemeType, AbstractNode } from '../../build/templates/types';
import {
  pipe,
  clone,
  map,
  filter,
  where,
  equals,
  gt as greaterThan,
  both,
  unless,
  length,
  dissoc as deleteProp,
  reduce,
  path as get,
  __,
  applyTo,
  defaultTo
} from 'ramda';
import parseXML, { Element } from '@rgrove/parse-xml';

export interface SVG2DefinitionOptions {
  theme: ThemeType;
  factories: TransformFactory[];
}

export interface XML2AbstractNodeOptions extends SVG2DefinitionOptions {
  name: string;
}

export type TransformOptions = Pick<XML2AbstractNodeOptions, 'name' | 'theme'>;

export interface TransformFactory {
  (options: TransformOptions): (asn: AbstractNode) => AbstractNode;
}

// SVG => IconDefinition
export const svg2Definition = ({ theme, factories }: SVG2DefinitionOptions) =>
  createTrasformStream((SVGString, { stem: name }) =>
    applyTo(SVGString)(
      pipe(
        // 0. The SVG string is like that:
        // <svg viewBox="0 0 1024 1024"><path d="..."/></svg>
        parseXML,
        // 1. The parsed XML root node is with the JSON shape:
        // {
        //   "type": "document",
        //   "children": [
        //     {
        //       "type": "element",
        //       "name": "svg",
        //       "attributes": { "viewBox": "0 0 1024 1024" },
        //       "children": [
        //         {
        //           "type": "element",
        //           "name": "path",
        //           "attributes": {
        //             "d": "..."
        //           },
        //           "children": []
        //         }
        //       ]
        //     }
        //   ]
        // }
        get<Element>(['children', 0]),
        defaultTo(({} as any) as Element), // @todo: "defaultTo" is not the best way to deal with the type Maybe<Element>
        // 2. The element node is with the JSON shape:
        // {
        //   "type": "element",
        //   "name": "svg",
        //   "attributes": { "viewBox": "0 0 1024 1024" },
        //   "children": [
        //     {
        //       "type": "element",
        //       "name": "path",
        //       "attributes": {
        //         "d": "..."
        //       },
        //       "children": []
        //     }
        //   ]
        // }
        element2AbstractNode({ name, theme, factories }),
        // 3. The abstract node is with the JSON shape:
        // {
        //   "tag": "svg",
        //   "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" },
        //   "children": [
        //     {
        //       "tag": "path",
        //       "attrs": {
        //         "d": "..."
        //       }
        //     }
        //   ]
        // }
        JSON.stringify
      )
    )
  );

function element2AbstractNode({
  name,
  theme,
  factories
}: XML2AbstractNodeOptions) {
  return ({ name: tag, attributes, children }: Element): AbstractNode =>
    applyTo(factories)(
      pipe(
        map((factory: TransformFactory) => factory({ name, theme })),
        reduce(
          (transformedNode, extraTransformFn) =>
            extraTransformFn(transformedNode),
          applyTo({
            tag,
            attrs: clone(attributes),
            children: applyTo(children as Element[])(
              pipe(
                filter<Element, 'array'>(where({ type: equals('element') })),
                map(element2AbstractNode({ name, theme, factories }))
              )
            )
          })(
            unless<AbstractNode, AbstractNode>(
              where({
                children: both(Array.isArray, pipe(length, greaterThan(__, 0)))
              }),
              deleteProp('children')
            )
          )
        )
      )
    );
}
