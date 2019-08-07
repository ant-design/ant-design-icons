import { series, src, dest, TaskFunction } from 'gulp';
import gulpIf from 'gulp-if';
import svgo from './plugins/svgo';
import { isTwotoneSVG } from './build/helpers';
import { twoToneSVGOConfig, singleColorSVGOConfig } from './build/svgo-options';
import icond from './plugins/icond';
import rename from 'gulp-rename';
import del from 'del';

export const clean: TaskFunction = function clean() {
  return del(['src']);
};

export const generate: TaskFunction = function generate() {
  return src('svg/**/*.svg')
    .pipe(
      gulpIf(isTwotoneSVG, svgo(twoToneSVGOConfig), svgo(singleColorSVGOConfig))
    )
    .pipe(icond())
    .pipe(
      rename({
        extname: '.json'
      })
    )
    .pipe(dest('src'));
};

export default series(clean, generate);
