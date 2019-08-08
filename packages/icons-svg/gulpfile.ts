import { series, src, dest, parallel } from 'gulp';
import svgo from './plugins/svgo';
import {
  iconsAfter3Dot9ShouldBeResizeViewbox,
  iconShouldNotBeFocusable,
  twoToneIconExtractColor,
  twoToneStringfy,
  getIdentifier
} from './build/helpers';
import merge from 'merge-stream';
import concat from 'gulp-concat';
import { twoToneSVGOConfig, singleColorSVGOConfig } from './build/svgo-options';
import iconDefinition from './plugins/icon-definition';
import tpl from './plugins/tpl';
import rename from 'gulp-rename';
import clone from 'gulp-clone';
import del from 'del';
import { resolve } from 'path';
import inlineSVG from './plugins/inline-svg';
import header from 'gulp-header';

export function clean() {
  return del(['src', 'inline-svg']);
}

export function copy() {
  return src(['build/templates/*.ts']).pipe(dest('src'));
}

export function outline() {
  const iconDefinitionStream = src('svg/outline/*.svg')
    .pipe(svgo(singleColorSVGOConfig))
    .pipe(
      iconDefinition({
        theme: 'outline',
        extraNodeTransforms: [
          iconShouldNotBeFocusable,
          iconsAfter3Dot9ShouldBeResizeViewbox
        ]
      })
    );

  return merge(
    iconDefinitionStream
      .pipe(clone())
      .pipe(inlineSVG())
      .pipe(dest('inline-svg/outline')),
    iconDefinitionStream
      .pipe(
        tpl({
          tplSource: resolve(__dirname, './build/templates/icon.ts.ejs'),
          mapFileToInterpolate: ({ name, content }) => ({
            identifier: getIdentifier({ name, theme: 'outline' }),
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
      .pipe(dest('src/asn'))
  );
}

export function fill() {
  const iconDefinitionStream = src('svg/fill/*.svg')
    .pipe(svgo(singleColorSVGOConfig))
    .pipe(
      iconDefinition({
        theme: 'fill',
        extraNodeTransforms: [
          iconShouldNotBeFocusable,
          iconsAfter3Dot9ShouldBeResizeViewbox
        ]
      })
    );

  return merge(
    iconDefinitionStream
      .pipe(clone())
      .pipe(inlineSVG())
      .pipe(dest('inline-svg/fill')),
    iconDefinitionStream
      .pipe(
        tpl({
          tplSource: resolve(__dirname, './build/templates/icon.ts.ejs'),
          mapFileToInterpolate: ({ name, content }) => ({
            identifier: getIdentifier({ name, theme: 'fill' }),
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
      .pipe(dest('src/asn'))
  );
}

export function twoTone() {
  const iconDefinitionStream = src('svg/twotone/*.svg')
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
    );

  return merge(
    iconDefinitionStream
      .pipe(clone())
      .pipe(inlineSVG())
      .pipe(dest('inline-svg/twotone')),
    iconDefinitionStream
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
      .pipe(dest('src/asn'))
  );
}

export function index() {
  return merge(
    src('svg/outline/*.svg').pipe(
      tpl({
        tplSource: resolve(__dirname, './build/templates/exportIcon.ts.ejs'),
        mapFileToInterpolate: ({ name }) => {
          const identifier = getIdentifier({ name, theme: 'outline' });
          return {
            identifier,
            path: `./asn/${identifier}`
          };
        }
      })
    ),
    src('svg/fill/*.svg').pipe(
      tpl({
        tplSource: resolve(__dirname, './build/templates/exportIcon.ts.ejs'),
        mapFileToInterpolate: ({ name }) => {
          const identifier = getIdentifier({ name, theme: 'fill' });
          return {
            identifier,
            path: `./asn/${identifier}`
          };
        }
      })
    ),
    src('svg/twotone/*.svg').pipe(
      tpl({
        tplSource: resolve(__dirname, './build/templates/exportIcon.ts.ejs'),
        mapFileToInterpolate: ({ name }) => {
          const identifier = getIdentifier({ name, theme: 'twotone' });
          return {
            identifier,
            path: `./asn/${identifier}`
          };
        }
      })
    )
  )
    .pipe(concat('index.ts'))
    .pipe(
      header(
        `// This index.ts file is generated automatically.\n` +
          `// tslint:disable\n`
      )
    )
    .pipe(dest('src'));
}
export default series(
  clean,
  parallel(copy, index, outline, fill, twoTone)
  //parallel(outlineInline, fillInline, twoToneInline)
);
