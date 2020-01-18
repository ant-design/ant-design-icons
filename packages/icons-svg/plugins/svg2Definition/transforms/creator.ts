import { TransformFactory, TransformOptions } from '..';
import { evolve, clone, pipe, mergeLeft, when, equals, where } from 'ramda';
import { AbstractNode } from '../../../build/templates/types';

type Dictionary = Record<string, string>;

export function assignAttrsAtTag(
  tag: string,
  extraPropsOrFn: Dictionary | ((options: TransformOptions) => Dictionary)
): TransformFactory {
  return (options) =>
    when<AbstractNode, AbstractNode>(
      where({
        tag: equals(tag)
      }),
      evolve({
        attrs: pipe<Dictionary, Dictionary, Dictionary>(
          clone,
          mergeLeft(
            typeof extraPropsOrFn === 'function'
              ? extraPropsOrFn(options)
              : extraPropsOrFn
          )
        )
      })
    );
}
