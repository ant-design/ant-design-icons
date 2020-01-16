import { TransformFactory } from '..';
import { evolve, clone, pipe, mergeLeft, when, equals, where } from 'ramda';
import { AbstractNode } from '../../../build/templates/types';

export function assignAttrsAtTag(
  tag: string,
  extraProps: { [key: string]: string }
): TransformFactory {
  return () =>
    when<AbstractNode, AbstractNode>(
      where({
        tag: equals(tag)
      }),
      evolve({
        attrs: pipe<
          { [key: string]: string },
          { [key: string]: string },
          { [key: string]: string }
        >(clone, mergeLeft(extraProps))
      })
    );
}
