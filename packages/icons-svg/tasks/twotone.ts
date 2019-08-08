import { src, dest } from 'gulp';
import svgo from '../plugins/svgo';
import {
  iconsAfter3Dot9ShouldBeResizeViewbox,
  iconShouldNotBeFocusable,
  twoToneIconExtractColor,
  twoToneStringfy,
  getIdentifier
} from '../build/helpers';
import merge from 'merge-stream';
import { twoToneSVGOConfig } from '../build/svgo-options';
import iconDefinition from '../plugins/icon-definition';
import tpl from '../plugins/tpl';
import rename from 'gulp-rename';
import clone from 'gulp-clone';
import { resolve } from 'path';
import inlineSVG from '../plugins/inline-svg';

export default function twoTone() {
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
      .pipe(
        inlineSVG({
          placeholders: {
            primaryColor: '#1890ff',
            secondaryColor: '#e6f7ff'
          },
          extraSVGAttrs: {
            xmlns: 'http://www.w3.org/2000/svg'
          }
        })
      )
      .pipe(dest('docs/inline-svg/twotone')),
    iconDefinitionStream
      .pipe(clone())
      .pipe(inlineSVG())
      .pipe(dest('inline-svg/twotone')),
    iconDefinitionStream
      .pipe(
        tpl({
          tplSource: resolve(__dirname, '../build/templates/icon.ts.ejs'),
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
