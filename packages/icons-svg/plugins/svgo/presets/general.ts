import SVGO from 'svgo';
import { mergeRight, concat, defaultTo } from 'ramda';
import { base } from './base';

export const generalConfig: SVGO.Options = mergeRight(base, {
  plugins: concat(defaultTo([])(base.plugins), [
    { removeAttrs: { attrs: ['class'] } }
  ])
});
