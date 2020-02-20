import { createTrasformStream } from '../creator';
import {
  renderIconDefinitionToSVGElement,
  HelperRenderOptions
} from '../../templates/helpers';
import { IconDefinition, ThemeType } from '../../templates/types';

export interface RenderOptions extends HelperRenderOptions {
  getIconDefinitionFromSource: (raw: string) => IconDefinition;
}

export interface RenderCustomData {
  theme: ThemeType;
}

export const useRender = ({
  getIconDefinitionFromSource,
  ...options
}: RenderOptions) =>
  createTrasformStream((content, file) => {
    const def = getIconDefinitionFromSource(content);
    file.extname = '.svg';
    file.stem = def.name;
    file._renderData = {
      theme: def.theme
    } as RenderCustomData;
    return renderIconDefinitionToSVGElement(def, options);
  });
