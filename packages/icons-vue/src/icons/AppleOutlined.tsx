// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AppleOutlinedSvg from '@ant-design/icons-svg/lib/asn/AppleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AppleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AppleOutlined: AppleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AppleOutlinedSvg}></AntdIcon>;
};

AppleOutlined.displayName = 'AppleOutlined';
AppleOutlined.inheritAttrs = false;
export default AppleOutlined;