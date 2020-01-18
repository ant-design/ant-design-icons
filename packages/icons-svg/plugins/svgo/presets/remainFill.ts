import SVGO from 'svgo';
import { mergeRight } from 'ramda';
import { base } from './base';

export const remainFillConfig: SVGO.Options = mergeRight(base, {
  plugins: [...(base.plugins || []), { removeAttrs: { attrs: ['class'] } }]
});
