import { IconDefinition, library } from 'antd-icons';
import { FunctionalComponentOptions } from 'vue';
import { RecordPropsDefinition } from 'vue/types/options';
import { convert } from '../converter';

export interface IAntdIconProps {
  type: string | IconDefinition;
}

const AntdIcon: FunctionalComponentOptions<IAntdIconProps, RecordPropsDefinition<IAntdIconProps>> = {
  name: 'AntdIcon',
  functional: true,
  props: {
    type: {
      validator(value: any) {
        return typeof value === 'string' || isIconDefinition(value);
      },
      required: true
    }
  },
  render(h, context) {
    const { type, ...rest } = context.props;
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
    return convert(h, target, rest);
  }
};

function isIconDefinition(target: any): target is IconDefinition {
  return typeof target === 'object' && typeof target.width === 'number'
    && typeof target.height === 'number' && Array.isArray(target.children);
}

export default AntdIcon;
