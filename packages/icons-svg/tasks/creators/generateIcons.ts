import { src, dest } from 'gulp';
import SVGO from 'svgo';
import { SVG2DefinitionOptions } from '../../plugins/svg2Definition';
import rename from 'gulp-rename';
import { UseTemplatePluginOptions } from '../../plugins/useTemplate';
import { useTemplate, svg2Definition, svgo } from '../../plugins';

export interface GenerateIconsOptions
  extends SVG2DefinitionOptions,
    UseTemplatePluginOptions {
  from: string[];
  toDir: string;
  svgoConfig: SVGO.Options;
  filename: (option: { name: string }) => string;
}

export const generateIcons = ({
  from,
  toDir,
  svgoConfig,
  theme,
  extraNodeTransformFactories,
  stringify,
  template,
  mapToInterpolate,
  filename
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
      .pipe(useTemplate({ template, mapToInterpolate }))
      .pipe(
        rename((file) => {
          if (file.basename) {
            file.basename = filename({ name: file.basename });
            file.extname = '.ts';
          }
        })
      )
      .pipe(dest(toDir));
  };
