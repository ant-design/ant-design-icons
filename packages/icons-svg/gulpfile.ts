import { series, src, dest, parallel, TaskFunction } from 'gulp';
import svgo from './plugins/svgo';
import { mergeAttrs } from './build/helpers';
import { twoToneSVGOConfig, singleColorSVGOConfig } from './build/svgo-options';
import icond from './plugins/icond';
import rename from 'gulp-rename';
import del from 'del';

export const clean: TaskFunction = function clean() {
  return del(['src']);
};

export const outlineFlow: TaskFunction = function outlineFlow() {
  return src('svg/outline/*.svg')
    .pipe(svgo(singleColorSVGOConfig))
    .pipe(
      icond({
        theme: 'outline',
        mergeAttrs
      })
    )
    .pipe(rename({ extname: '.json' }))
    .pipe(dest('src'));
};

export const fillFlow: TaskFunction = function fillFlow() {
  return src('svg/fill/*.svg')
    .pipe(svgo(singleColorSVGOConfig))
    .pipe(
      icond({
        theme: 'fill',
        mergeAttrs
      })
    )
    .pipe(rename({ extname: '.json' }))
    .pipe(dest('src'));
};

export const twoToneFlow: TaskFunction = function twoToneFlow() {
  return src('svg/twotone/*.svg')
    .pipe(svgo(twoToneSVGOConfig))
    .pipe(
      icond({
        theme: 'twotone',
        mergeAttrs
      })
    )
    .pipe(rename({ extname: '.json' }))
    .pipe(dest('src'));
};

export default series(clean, parallel(outlineFlow, fillFlow, twoToneFlow));
