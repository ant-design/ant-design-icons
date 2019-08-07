import File from 'vinyl';
import { IconDefinitionBase } from '../plugins/icond';
import { oldIcons, twotoneRE } from './constants';

export const isTwotoneSVG = (file: File) => {
  return twotoneRE.test(file.path);
};

export function mergeAttrs(icond: IconDefinitionBase) {
  const attrs: { [key: string]: string } = {
    focusable: 'false'
  };

  if (!oldIcons.includes(icond.name)) {
    attrs.viewBox = '64 64 896 896';
  }

  return attrs;
}
