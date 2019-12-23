import { src, dest } from 'gulp';
import { getIdentifier, getSrcByTheme } from '../../build/helpers';
import {
  ThemeUpperCaseEnum,
  ThemeLowerCaseEnum,
  ThemeTypeUpperCase
} from '../../build/constants';
import merge from 'merge-stream';
import concat from 'gulp-concat';
import useTemplate, { UseTemplateOptions } from '../../plugins/use-template';
import { resolve } from 'path';
import header from 'gulp-header';

const BANNER =
  `// This index.ts file is generated automatically.\n` + `// tslint:disable\n`;
const { filled, outlined, twotone } = ThemeLowerCaseEnum;
const { Filled, Outlined, TwoTone } = ThemeUpperCaseEnum;

/**
 * Generate Library Entry like that:
 * `export { default as AccountBookFilled } from './asn/AccountBookFilled';`
 */
export default function generateLibraryEntry() {
  return merge(
    src(getSrcByTheme(filled)).pipe(
      useTemplate(getOptions({ themeSuffix: Filled }))
    ),
    src(getSrcByTheme(outlined)).pipe(
      useTemplate(getOptions({ themeSuffix: Outlined }))
    ),
    src(getSrcByTheme(twotone)).pipe(
      useTemplate(getOptions({ themeSuffix: TwoTone }))
    )
  )
    .pipe(concat('index.ts'))
    .pipe(header(BANNER))
    .pipe(dest('src'));
}

function getOptions({
  themeSuffix
}: {
  themeSuffix: ThemeTypeUpperCase;
}): UseTemplateOptions {
  return {
    tplSource: resolve(__dirname, '../../build/templates/exportIcon.ts.ejs'),
    mapFileToInterpolate: ({ name }) => {
      const identifier = getIdentifier({
        name,
        themeSuffix
      });
      return {
        identifier,
        path: `./asn/${identifier}`
      };
    }
  };
}
