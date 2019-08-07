import { series, src, dest, parallel, TaskFunction } from 'gulp';
import svgo from './plugins/svgo';
import {
  iconsAfter3Dot9ShouldBeResizeViewbox,
  iconShouldNotBeFocusable,
  twoToneIconExtractColor,
  twoToneStringfy
} from './build/helpers';
import { twoToneSVGOConfig, singleColorSVGOConfig } from './build/svgo-options';
import iconDefinition from './plugins/icon-definition';
import rename from 'gulp-rename';
import del from 'del';

export const clean: TaskFunction = function clean() {
  return del(['src']);
};

export const outlineFlow: TaskFunction = function outlineFlow() {
  return src('svg/outline/*.svg')
    .pipe(svgo(singleColorSVGOConfig))
    .pipe(
      iconDefinition({
        theme: 'outline',
        extraNodeTransforms: [
          iconShouldNotBeFocusable,
          iconsAfter3Dot9ShouldBeResizeViewbox
        ]
      })
    )
    .pipe(rename({ extname: '.ts', suffix: '-outline' }))
    .pipe(dest('src'));
};

export const fillFlow: TaskFunction = function fillFlow() {
  return src('svg/fill/*.svg')
    .pipe(svgo(singleColorSVGOConfig))
    .pipe(
      iconDefinition({
        theme: 'fill',
        extraNodeTransforms: [
          iconShouldNotBeFocusable,
          iconsAfter3Dot9ShouldBeResizeViewbox
        ]
      })
    )
    .pipe(rename({ extname: '.ts', suffix: '-fill' }))
    .pipe(dest('src'));
};

export const twoToneFlow: TaskFunction = function twoToneFlow() {
  return src('svg/twotone/*.svg')
    .pipe(svgo(twoToneSVGOConfig))
    .pipe(
      iconDefinition({
        theme: 'twotone',
        extraNodeTransforms: [
          iconShouldNotBeFocusable,
          iconsAfter3Dot9ShouldBeResizeViewbox,
          twoToneIconExtractColor
        ],
        stringify: twoToneStringfy
      })
    )
    .pipe(rename({ extname: '.js', suffix: '-twotone' }))
    .pipe(dest('src'));
};

export default series(clean, parallel(outlineFlow, fillFlow, twoToneFlow));
