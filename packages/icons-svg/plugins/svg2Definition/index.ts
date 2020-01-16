import { createTrasformStreamAsync } from '../creator';
import { ThemeType, AbstractNode } from '../../build/templates/types';
import {
  pipe,
  prop,
  head,
  defaultTo,
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
  compose,
  __
} from 'ramda';
import parseXML from '@rgrove/parse-xml';

export interface SVG2DefinitionOptions {
  theme: ThemeType;
  factories: TransformFactory[];
}

export interface XML2AbstractNodeOptions extends SVG2DefinitionOptions {
  name: string;
}

export interface TransformFactory {
  (options: Pick<XML2AbstractNodeOptions, 'name' | 'theme'>): (
    asn: AbstractNode
  ) => AbstractNode;
}

const element2AbstractNode = ({
  name,
  theme,
  factories
}: XML2AbstractNodeOptions) => ({
  name: tag,
  attributes,
  children
}: parseXML.Element): AbstractNode =>
  compose(
    reduce(
      (transformedNode, extraTransformFn: ReturnType<TransformFactory>) =>
        extraTransformFn(transformedNode),
      unless<AbstractNode, AbstractNode>(
        where({
          children: both(Array.isArray, pipe(length, greaterThan(__, 0)))
        }),
        deleteProp('children')
      )({
        tag,
        attrs: clone(attributes),
        children: pipe(
          filter<parseXML.Element, 'array'>(where({ type: equals('element') })),
          map(element2AbstractNode({ name, theme, factories }))
        )(children as parseXML.Element[])
      })
    ),
    map((factory: TransformFactory) => factory({ name, theme }))
  )(factories);

export const svg2Definition = ({ theme, factories }: SVG2DefinitionOptions) => {
  return createTrasformStreamAsync(async (before, { stem: name }) => {
    return pipe(
      parseXML,
      prop('children'),
      defaultTo<parseXML.Element[]>([]),
      head,
      // Here is an abstract node with the shape:
      // {
      //   "type": "element",
      //   "name": "svg",
      //   "attributes": { "viewBox": "0 0 1024 1024" },
      //   "children": [
      //     {
      //       "type": "element",
      //       "name": "path",
      //       "attributes": {
      //         "d": "M854.6 370.6c-9.9-39......"
      //       },
      //       "children": []
      //     }
      //   ]
      // }
      element2AbstractNode({ name, theme, factories }),
      JSON.stringify
    )(before);
  });
};
