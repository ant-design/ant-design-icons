import { src, dest } from 'gulp';
import { useTemplate } from '../../plugins';
import concat from 'gulp-concat';
import header from 'gulp-header';
import { UseTemplatePluginOptions } from '../../plugins/useTemplate';

export interface GenerateEntryOptions extends UseTemplatePluginOptions {
  from: string[];
  toDir: string;
  entryName: string;
  banner?: string;
}

export const generateEntry = ({
  from,
  toDir,
  template,
  mapToInterpolate,
  entryName,
  banner = ''
}: GenerateEntryOptions) =>
  function GenerateEntry() {
    return src(from)
      .pipe(
        useTemplate({
          template,
          mapToInterpolate
        })
      )
      .pipe(concat(entryName))
      .pipe(header(banner))
      .pipe(dest(toDir));
  };
