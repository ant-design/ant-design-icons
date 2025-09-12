// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SunFilledSvg from '@ant-design/icons-svg/lib/asn/SunFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SunFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SunFilled: SunFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SunFilledSvg}></AntdIcon>;
};

SunFilled.displayName = 'SunFilled';
SunFilled.inheritAttrs = false;
export default SunFilled;