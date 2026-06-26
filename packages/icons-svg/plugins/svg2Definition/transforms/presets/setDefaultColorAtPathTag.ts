import { assignAttrsAtTag } from '..';
import type { TransformFactory } from '../..';

export const setDefaultColorAtPathTag: (
  defaultColor: string
) => TransformFactory = (defaultColor) =>
  assignAttrsAtTag('path', ({ previousAttrs }) => ({
    fill: previousAttrs.fill || defaultColor
  }));
