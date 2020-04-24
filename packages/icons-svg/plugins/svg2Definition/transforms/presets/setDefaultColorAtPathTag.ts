import { TransformFactory } from '../..';
import { assignAttrsAtTag } from '..';

export const setDefaultColorAtPathTag: (
  defaultColor: string
) => TransformFactory = (defaultColor) =>
  assignAttrsAtTag('path', ({ previousAttrs }) => ({
    fill: previousAttrs.fill || defaultColor
  }));
