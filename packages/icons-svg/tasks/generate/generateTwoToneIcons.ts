import { src, dest } from 'gulp';
import svgo from '../../plugins/svgo';
import {
  getIdentifier,
  getSrcByTheme,
  getInlinePathByTheme
} from '../../build/helpers';
import merge from 'merge-stream';
import { twoToneSVGOConfig } from '../../build/svgo-options';
import iconDefinition from '../../plugins/icon-definition';
import useTemplate from '../../plugins/use-template';
import rename from 'gulp-rename';
import clone from 'gulp-clone';
import { resolve } from 'path';
import inlineSVG from '../../plugins/inline-svg';
import { ThemeLowerCaseEnum, ThemeUpperCaseEnum } from '../../build/constants';
import {
  iconShouldNotBeFocusable,
  iconsAfter3Dot9ShouldBeResizeViewbox,
  twoToneIconExtractColor,
  twoToneStringfy
} from '../../build/strategies';

const { twotone } = ThemeLowerCaseEnum;
const { TwoTone } = ThemeUpperCaseEnum;

/**
 * Generate Icons to 3 places:
 * 1. src/asn/<name><themeSuffix>.ts
 * 2. docs/inline-svg/<theme>/*.svg
 * 3. inline-svg/<theme>/*.svg
 */
export default function generateTwoToneIcons(): NodeJS.ReadWriteStream {
  const iconDefinitionStream = src(getSrcByTheme(twotone))
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
      .pipe(dest(getInlinePathByTheme(twotone))),
    iconDefinitionStream
      .pipe(
        useTemplate({
          tplSource: resolve(__dirname, '../../build/templates/icon.ts.ejs'),
          mapFileToInterpolate: ({ name, content }) => ({
            identifier: getIdentifier({ name, themeSuffix: TwoTone }),
            content
          })
        })
      )

      .pipe(
        rename((file) => {
          file.basename = getIdentifier({
            name: file.basename!,
            themeSuffix: TwoTone
          });
          file.extname = '.ts';
        })
      )
      .pipe(dest('src/asn'))
  );
}
