import { src, dest } from 'gulp';
import * as File from 'vinyl';
import { useRender } from '../../plugins';
import { RenderCustomData } from '../../plugins/render';
import { IconDefinition } from '../../templates/types';

export interface GenerateInlineOptions {
  from: string[];
  toDir: (file: File & { _renderData?: RenderCustomData }) => string;
  getIconDefinitionFromSource: (raw: string) => IconDefinition;
}

export const ExtractRegExp = /({\s*".*});/;

export const generateInline = ({
  from,
  toDir,
  getIconDefinitionFromSource
}: GenerateInlineOptions) =>
  function GenerateInline() {
    return src(from)
      .pipe(
        useRender({
          getIconDefinitionFromSource
        })
      )
      .pipe(dest(toDir));
  };
