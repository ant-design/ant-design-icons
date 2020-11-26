// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StepBackwardFilledSvg from '@ant-design/icons-svg/lib/asn/StepBackwardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StepBackwardFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StepBackwardFilled: StepBackwardFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StepBackwardFilledSvg}></AntdIcon>;
};

StepBackwardFilled.displayName = 'StepBackwardFilled';
StepBackwardFilled.inheritAttrs = false;
export default StepBackwardFilled;