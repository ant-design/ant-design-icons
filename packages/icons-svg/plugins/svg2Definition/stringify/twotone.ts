import { StringifyFn, AbstractNodeDefinition } from '..';
import {
  applyTo,
  map,
  join,
  pipe,
  ap,
  toUpper,
  toLower,
  evolve,
  toPairs,
  replace,
  apply,
  flip,
  compose,
  zipWith,
  call,
  assoc,
  clone,
  prop
} from 'ramda';

const __PLACEHOLDER__ = 'TWOTONE_ICON_FUNCTION_HOLDER';
const __PRIMARY_COLOR__ = 'primaryColor';
const __SECONDARY_COLOR__ = 'secondaryColor';

const getRegExpFromColors = pipe(
  ap([toUpper, toLower]),
  map((color) => `("${color}")`),
  join('|'),
  (content) => new RegExp(content, 'g')
);

const colorsReplacer = applyTo({
  [__PRIMARY_COLOR__]: ['#333', '#333333'],
  [__SECONDARY_COLOR__]: ['#E6E6E6', '#D9D9D9', '#D8D8D8']
})(
  pipe(
    evolve({
      [__PRIMARY_COLOR__]: getRegExpFromColors,
      [__SECONDARY_COLOR__]: getRegExpFromColors
    }),
    toPairs,
    map(
      compose<ReplaceType, FlippedReplaceType, ApplyFlippedReplaceType>(
        apply,
        flip
      )(replace)
    ),
    apply<(str: string) => string, (str: string) => string>(pipe)
  )
);

type ReplaceType = (
  pattern: RegExp,
  replacement: string
) => (str: string) => string;

type FlippedReplaceType = (
  replacement: string,
  pattern: RegExp
) => (str: string) => string;

type ApplyFlippedReplaceType = ([replacement, pattern]: [string, RegExp]) => (
  str: string
) => string;

const duplicate = <T>(n: T): [T, T] => [clone(n), clone(n)];

export const twotoneStringify: StringifyFn = pipe(
  duplicate,
  zipWith<
    (asnd: AbstractNodeDefinition) => string,
    AbstractNodeDefinition,
    string
  >(call as any, [
    pipe(assoc('icon', __PLACEHOLDER__), JSON.stringify),
    pipe(
      prop('icon'),
      JSON.stringify,
      colorsReplacer,
      (content) =>
        `function render(${__PRIMARY_COLOR__}, ${__SECONDARY_COLOR__}) { return ${content}; }`
    )
  ]),
  ([hasPlaceholderContent, iconFunctionContent]) =>
    replace(`"${__PLACEHOLDER__}"`, iconFunctionContent, hasPlaceholderContent)
);
