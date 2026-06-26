import { createTransformStream } from '../creator';
import { renderIconDefinitionToSVGElement } from '../../templates/helpers';
import type { HelperRenderOptions } from '../../templates/helpers';
import type { IconDefinition, ThemeType } from '../../templates/types';

export interface RenderOptions {
  getIconDefinitionFromSource: (raw: string) => IconDefinition;
  renderOptions: HelperRenderOptions;
}

export interface RenderCustomData {
  theme: ThemeType;
}

export const useRender = ({
  getIconDefinitionFromSource,
  renderOptions
}: RenderOptions) =>
  createTransformStream((content, file) => {
    const def = getIconDefinitionFromSource(content);
    file.extname = '.svg';
    file.stem = def.name;
    file._meta = {
      theme: def.theme
    } as RenderCustomData;
    return renderIconDefinitionToSVGElement(def, renderOptions);
  });
