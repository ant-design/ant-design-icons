// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BorderTopOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderTopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BorderTopOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BorderTopOutlined: BorderTopOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BorderTopOutlinedSvg}></AntdIcon>;
};

BorderTopOutlined.displayName = 'BorderTopOutlined';
BorderTopOutlined.inheritAttrs = false;
export default BorderTopOutlined;