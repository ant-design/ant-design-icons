// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BorderOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BorderOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BorderOutlined: BorderOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BorderOutlinedSvg}></AntdIcon>;
};

BorderOutlined.displayName = 'BorderOutlined';
BorderOutlined.inheritAttrs = false;
export default BorderOutlined;