import { series, parallel } from 'gulp';
import { clean } from './tasks/clean';
import { copy } from './tasks/copy';
import { entry } from './tasks/entry';
import { outline } from './tasks/outline';
import { fill } from './tasks/fill';
import { twoTone } from './tasks/twotone';

export default series(
  clean,
  parallel(copy, entry, outline, fill, twoTone)
  //parallel(outlineInline, fillInline, twoToneInline)
);
