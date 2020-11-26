// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BorderOuterOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderOuterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BorderOuterOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BorderOuterOutlined: BorderOuterOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BorderOuterOutlinedSvg}></AntdIcon>;
};

BorderOuterOutlined.displayName = 'BorderOuterOutlined';
BorderOuterOutlined.inheritAttrs = false;
export default BorderOuterOutlined;