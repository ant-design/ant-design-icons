// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StopFilledSvg from '@ant-design/icons-svg/lib/asn/StopFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StopFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StopFilled: StopFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StopFilledSvg}></AntdIcon>;
};

StopFilled.displayName = 'StopFilled';
StopFilled.inheritAttrs = false;
export default StopFilled;