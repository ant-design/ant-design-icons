import { src, dest } from 'gulp';
import SVGO from 'svgo';
import { svgo } from '../../plugins';

export interface GenerateIconsOptions {
  from: string[];
  toDir: string;
  svgoConfig: SVGO.Options;
}

export const generateIcons = ({
  from,
  toDir,
  svgoConfig
}: GenerateIconsOptions) =>
  function GenerateIcons() {
    return src(from)
      .pipe(svgo(svgoConfig))
      .pipe(dest(toDir));
  };
