import { IconDefinitionBase } from '../plugins/icond';
import { oldIcons } from './constants';

export function mergeAttrs(icond: IconDefinitionBase) {
  const attrs: { [key: string]: string } = {
    focusable: 'false'
  };

  if (!oldIcons.includes(icond.name)) {
    attrs.viewBox = '64 64 896 896';
  }

  return attrs;
}
