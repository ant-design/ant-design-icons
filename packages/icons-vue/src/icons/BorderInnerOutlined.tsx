// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BorderInnerOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderInnerOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BorderInnerOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BorderInnerOutlined: BorderInnerOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BorderInnerOutlinedSvg}></AntdIcon>;
};

BorderInnerOutlined.displayName = 'BorderInnerOutlined';
BorderInnerOutlined.inheritAttrs = false;
export default BorderInnerOutlined;