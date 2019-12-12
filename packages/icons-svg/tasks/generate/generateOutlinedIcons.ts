import { src, dest } from 'gulp';
import svgo from '../../plugins/svgo';
import {
  getIdentifier,
  getSrcByTheme,
  getInlinePathByTheme
} from '../../build/helpers';
import merge from 'merge-stream';
import { singleColorSVGOConfig } from '../../build/svgo-options';
import iconDefinition from '../../plugins/icon-definition';
import useTemplate from '../../plugins/use-template';
import rename from 'gulp-rename';
import clone from 'gulp-clone';
import { resolve } from 'path';
import inlineSVG from '../../plugins/inline-svg';
import { ThemeLowerCaseEnum, ThemeUpperCaseEnum } from '../../build/constants';
import {
  iconShouldNotBeFocusable,
  iconsAfter3Dot9ShouldBeResizeViewbox
} from '../../build/strategies';

const { outlined } = ThemeLowerCaseEnum;
const { Outlined } = ThemeUpperCaseEnum;

/**
 * Generate Icons to 3 places:
 * 1. src/asn/<name><themeSuffix>.ts
 * 2. docs/inline-svg/<theme>/*.svg
 * 3. inline-svg/<theme>/*.svg
 */
export default function generateOutlinedIcons(): NodeJS.ReadWriteStream {
  const iconDefinitionStream = src(getSrcByTheme(outlined))
    .pipe(svgo(singleColorSVGOConfig))
    .pipe(
      iconDefinition({
        theme: outlined,
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
      .pipe(dest(getInlinePathByTheme(outlined))),
    iconDefinitionStream
      .pipe(
        useTemplate({
          tplSource: resolve(__dirname, '../../build/templates/icon.ts.ejs'),
          mapFileToInterpolate: ({ name, content }) => ({
            identifier: getIdentifier({ name, themeSuffix: Outlined }),
            content
          })
        })
      )
      .pipe(
        rename((file) => {
          file.basename = getIdentifier({
            name: file.basename!,
            themeSuffix: Outlined
          });
          file.extname = '.ts';
        })
      )
      .pipe(dest('src/asn'))
  );
}
