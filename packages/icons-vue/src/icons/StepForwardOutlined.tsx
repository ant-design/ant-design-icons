// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StepForwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/StepForwardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StepForwardOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StepForwardOutlined: StepForwardOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StepForwardOutlinedSvg}></AntdIcon>;
};

StepForwardOutlined.displayName = 'StepForwardOutlined';
StepForwardOutlined.inheritAttrs = false;
export default StepForwardOutlined;