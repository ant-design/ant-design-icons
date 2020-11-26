// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StrikethroughOutlinedSvg from '@ant-design/icons-svg/lib/asn/StrikethroughOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StrikethroughOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StrikethroughOutlined: StrikethroughOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StrikethroughOutlinedSvg}></AntdIcon>;
};

StrikethroughOutlined.displayName = 'StrikethroughOutlined';
StrikethroughOutlined.inheritAttrs = false;
export default StrikethroughOutlined;