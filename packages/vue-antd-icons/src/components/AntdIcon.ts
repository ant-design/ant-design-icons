import { IconDefinition, library } from 'antd-icons';
import Vue from 'vue';
import { convert } from '../converter';

export interface IAntdIconProps {
  type: string | IconDefinition;
}

const AntdIcon = Vue.extend<{}, {}, {}, IAntdIconProps>({
  name: 'AntdIcon',
  props: {
    type: {
      validator(value: any) {
        return typeof value === 'string' || isIconDefinition(value);
      },
      required: true
    }
  },
  render(h) {
    const type = this.type;
    let target: IconDefinition | null = null;
    if (isIconDefinition(type)) {
      target = type;
    } else if (typeof type === 'string') {
      target = library.definitions[type];
      if (!target) {
        if (!(process && process.env && process.env.NODE_ENV === 'production')) {
          console.error('[vue-antd-icons]: Could not find icon:', type);
        }
        return h();
      }
    }
    if (!target) {
      if (!(process && process.env && process.env.NODE_ENV === 'production')) {
        console.error('[vue-antd-icons]: type should be string or icon definiton, but got', type);
      }
      return h();
    }
    return convert(h, target, {});
  }
});

function isIconDefinition(target: any): target is IconDefinition {
  return typeof target === 'object' && typeof target.width === 'number'
    && typeof target.height === 'number' && Array.isArray(target.children);
}

export default AntdIcon;
