import { series, src, dest, parallel, TaskFunction } from 'gulp';
import svgo from './plugins/svgo';
import {
  iconsAfter3Dot9ShouldBeResizeViewbox,
  iconShouldNotBeFocusable,
  twoToneIconExtractColor,
  twoToneStringfy,
  getIdentifier
} from './build/helpers';
import { twoToneSVGOConfig, singleColorSVGOConfig } from './build/svgo-options';
import iconDefinition from './plugins/icon-definition';
import tpl from './plugins/tpl';
import rename from 'gulp-rename';
import del from 'del';
import { resolve } from 'path';
import inlineSVG from './plugins/inline-svg';

export function clean() {
  return del(['src', 'inline-svg']);
}

export function copy() {
  return src(['build/templates/*.ts']).pipe(dest('src'));
}

export function outline() {
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
    .pipe(dest('inline-svg/outline'))
    .pipe(
      tpl({
        tplSource: resolve(__dirname, './build/templates/icon.ts.ejs'),
        mapFileToInterpolate: ({ name, content }) => ({
          identifier: getIdentifier({ name, theme: 'twotone' }),
          content
        })
      })
    )
    .pipe(
      rename((file) => {
        file.basename = getIdentifier({
          name: file.basename!,
          theme: 'outline'
        });
        file.extname = '.ts';
      })
    )
    .pipe(dest('src/asn'));
}

export function fill() {
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
    .pipe(dest('inline-svg/fill'))
    .pipe(
      tpl({
        tplSource: resolve(__dirname, './build/templates/icon.ts.ejs'),
        mapFileToInterpolate: ({ name, content }) => ({
          identifier: getIdentifier({ name, theme: 'twotone' }),
          content
        })
      })
    )
    .pipe(
      rename((file) => {
        file.basename = getIdentifier({
          name: file.basename!,
          theme: 'fill'
        });
        file.extname = '.ts';
      })
    )
    .pipe(dest('src/asn'));
}

export function twoTone() {
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
    .pipe(dest('inline-svg/twotone'))
    .pipe(
      tpl({
        tplSource: resolve(__dirname, './build/templates/icon.ts.ejs'),
        mapFileToInterpolate: ({ name, content }) => ({
          identifier: getIdentifier({ name, theme: 'twotone' }),
          content
        })
      })
    )
    .pipe(
      rename((file) => {
        file.basename = getIdentifier({
          name: file.basename!,
          theme: 'twotone'
        });
        file.extname = '.ts';
      })
    )
    .pipe(dest('src/asn'));
}

export function outlineInline() {
  return src('inline-svg/outline/*.svg')
    .pipe(inlineSVG())
    .pipe(dest('inline-svg/outline'));
}

export function fillInline() {
  return src('inline-svg/fill/*.svg')
    .pipe(inlineSVG())
    .pipe(dest('inline-svg/fill'));
}

export function twoToneInline() {
  return src('inline-svg/twotone/*.svg')
    .pipe(inlineSVG())
    .pipe(dest('inline-svg/twotone'));
}

export default series(
  clean,
  parallel(copy, outline, fill, twoTone),
  parallel(outlineInline, fillInline, twoToneInline)
);
