import { TransformFactory, TransformOptions } from '..';
import {
  evolve,
  clone,
  pipe,
  mergeLeft,
  when,
  equals,
  where,
  mergeRight
} from 'ramda';
import { AbstractNode } from '../../../templates/types';

type Dictionary = Record<string, string>;

export function assignAttrsAtTag(
  tag: string,
  extraPropsOrFn:
    | Dictionary
    | ((
        options: TransformOptions & { previousAttrs: Dictionary }
      ) => Dictionary)
): TransformFactory {
  return (options) => (asn) =>
    when<AbstractNode, AbstractNode>(
      where({
        tag: equals(tag)
      }),
      evolve({
        attrs: pipe<Dictionary, Dictionary, Dictionary>(
          clone,
          mergeLeft(
            typeof extraPropsOrFn === 'function'
              ? extraPropsOrFn(
                  mergeRight(options, { previousAttrs: asn.attrs })
                )
              : extraPropsOrFn
          )
        )
      })
    )(asn);
}
