// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StepBackwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/StepBackwardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StepBackwardOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StepBackwardOutlined: StepBackwardOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StepBackwardOutlinedSvg}></AntdIcon>;
};

StepBackwardOutlined.displayName = 'StepBackwardOutlined';
StepBackwardOutlined.inheritAttrs = false;
export default StepBackwardOutlined;