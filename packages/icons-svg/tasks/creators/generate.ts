import { src, dest } from 'gulp';
import SVGO from 'svgo';
import { svgo } from '../../plugins';
import { svg2Definition, TransformFactory } from '../../plugins/svg2Definition';
import { ThemeType } from '../../build/templates/types';
import rename from 'gulp-rename';

export interface GenerateIconsOptions {
  from: string[];
  toDir: string;
  theme: ThemeType;
  svgoConfig: SVGO.Options;
  extraNodeTransformFactories: TransformFactory[];
}

export const generateIcons = ({
  from,
  toDir,
  svgoConfig,
  theme,
  extraNodeTransformFactories
}: GenerateIconsOptions) =>
  function GenerateIcons() {
    return src(from)
      .pipe(svgo(svgoConfig))
      .pipe(
        svg2Definition({
          theme,
          factories: extraNodeTransformFactories
        })
      )
      .pipe(
        rename((file) => {
          file.extname = '.json';
        })
      )
      .pipe(dest(toDir));
  };
