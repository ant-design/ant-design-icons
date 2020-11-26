// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StepForwardFilledSvg from '@ant-design/icons-svg/lib/asn/StepForwardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StepForwardFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StepForwardFilled: StepForwardFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StepForwardFilledSvg}></AntdIcon>;
};

StepForwardFilled.displayName = 'StepForwardFilled';
StepForwardFilled.inheritAttrs = false;
export default StepForwardFilled;