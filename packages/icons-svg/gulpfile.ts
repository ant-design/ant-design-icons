import { series, parallel } from 'gulp';
import clean from './tasks/clean';
import copy from './tasks/copy';
import entry from './tasks/entry';
import outline from './tasks/outline';
import fill from './tasks/fill';
import twoTone from './tasks/twotone';
import list from './tasks/list';

export default series(
  clean,
  parallel(copy, entry, outline, fill, twoTone),
  list
);
