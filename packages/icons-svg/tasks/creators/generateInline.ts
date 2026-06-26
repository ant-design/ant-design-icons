import { src, dest } from 'gulp';
import File from 'vinyl';
import { useRender } from '../../plugins';
import type { RenderCustomData } from '../../plugins/render';
import type { IconDefinition } from '../../templates/types';
import type { HelperRenderOptions } from '../../templates/helpers';

type RenderedFile = File & { _meta?: RenderCustomData };

export interface GenerateInlineOptions {
  from: string[];
  toDir: (file: RenderedFile) => string;
  getIconDefinitionFromSource: (raw: string) => IconDefinition;
  renderOptions?: HelperRenderOptions;
}

export const ExtractRegExp = /({\s*".*});/;

export const generateInline = ({
  from,
  toDir,
  getIconDefinitionFromSource,
  renderOptions = {}
}: GenerateInlineOptions) =>
  function GenerateInline() {
    return src(from)
      .pipe(
        useRender({
          getIconDefinitionFromSource,
          renderOptions
        })
      )
      .pipe(dest(toDir));
  };
