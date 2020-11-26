// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BorderHorizontalOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderHorizontalOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BorderHorizontalOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BorderHorizontalOutlined: BorderHorizontalOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BorderHorizontalOutlinedSvg}></AntdIcon>;
};

BorderHorizontalOutlined.displayName = 'BorderHorizontalOutlined';
BorderHorizontalOutlined.inheritAttrs = false;
export default BorderHorizontalOutlined;