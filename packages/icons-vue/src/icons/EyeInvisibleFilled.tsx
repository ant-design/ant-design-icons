// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EyeInvisibleFilledSvg from '@ant-design/icons-svg/lib/asn/EyeInvisibleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EyeInvisibleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EyeInvisibleFilled: EyeInvisibleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeInvisibleFilledSvg}></AntdIcon>;
};

EyeInvisibleFilled.displayName = 'EyeInvisibleFilled';
EyeInvisibleFilled.inheritAttrs = false;
export default EyeInvisibleFilled;