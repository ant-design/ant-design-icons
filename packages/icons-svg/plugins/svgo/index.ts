import SVGO from 'svgo';
import { createTransformStreamAsync } from '../creator';

export const svgo = (options: SVGO.Options) => {
  const optimizer = new SVGO(options);
  return createTransformStreamAsync(async (before) => {
    const { data } = await optimizer.optimize(before);
    return data;
  });
};
