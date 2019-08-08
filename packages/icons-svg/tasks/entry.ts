import { src, dest } from 'gulp';
import { getIdentifier } from '../build/helpers';
import merge from 'merge-stream';
import concat from 'gulp-concat';
import tpl from '../plugins/tpl';
import { resolve } from 'path';
import header from 'gulp-header';

export default function entry() {
  return merge(
    src('svg/outline/*.svg').pipe(
      tpl({
        tplSource: resolve(__dirname, '../build/templates/exportIcon.ts.ejs'),
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
        tplSource: resolve(__dirname, '../build/templates/exportIcon.ts.ejs'),
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
        tplSource: resolve(__dirname, '../build/templates/exportIcon.ts.ejs'),
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
