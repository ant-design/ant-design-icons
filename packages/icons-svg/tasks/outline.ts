import { src, dest } from 'gulp';
import svgo from '../plugins/svgo';
import {
  iconsAfter3Dot9ShouldBeResizeViewbox,
  iconShouldNotBeFocusable,
  getIdentifier
} from '../build/helpers';
import merge from 'merge-stream';
import { singleColorSVGOConfig } from '../build/svgo-options';
import iconDefinition from '../plugins/icon-definition';
import tpl from '../plugins/tpl';
import rename from 'gulp-rename';
import clone from 'gulp-clone';

import { resolve } from 'path';
import inlineSVG from '../plugins/inline-svg';

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
          tplSource: resolve(__dirname, '../build/templates/icon.ts.ejs'),
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
