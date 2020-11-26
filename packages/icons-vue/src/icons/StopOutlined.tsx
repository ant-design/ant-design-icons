// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StopOutlinedSvg from '@ant-design/icons-svg/lib/asn/StopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StopOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StopOutlined: StopOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StopOutlinedSvg}></AntdIcon>;
};

StopOutlined.displayName = 'StopOutlined';
StopOutlined.inheritAttrs = false;
export default StopOutlined;