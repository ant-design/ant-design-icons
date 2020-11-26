// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MobileOutlinedSvg from '@ant-design/icons-svg/lib/asn/MobileOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MobileOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MobileOutlined: MobileOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MobileOutlinedSvg}></AntdIcon>;
};

MobileOutlined.displayName = 'MobileOutlined';
MobileOutlined.inheritAttrs = false;
export default MobileOutlined;