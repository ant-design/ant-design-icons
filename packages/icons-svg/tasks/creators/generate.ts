import { src, dest } from 'gulp';
import SVGO from 'svgo';
import { svgo } from '../../plugins';
import {
  svg2Definition,
  SVG2DefinitionOptions
} from '../../plugins/svg2Definition';
import rename from 'gulp-rename';

export interface GenerateIconsOptions extends SVG2DefinitionOptions {
  from: string[];
  toDir: string;
  svgoConfig: SVGO.Options;
}

export const generateIcons = ({
  from,
  toDir,
  svgoConfig,
  theme,
  extraNodeTransformFactories,
  stringify
}: GenerateIconsOptions) =>
  function GenerateIcons() {
    return src(from)
      .pipe(svgo(svgoConfig))
      .pipe(
        svg2Definition({
          theme,
          extraNodeTransformFactories,
          stringify
        })
      )
      .pipe(
        rename((file) => {
          file.extname = '.ts';
        })
      )
      .pipe(dest(toDir));
  };
