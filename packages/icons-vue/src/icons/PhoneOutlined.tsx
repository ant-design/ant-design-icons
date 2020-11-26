// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PhoneOutlinedSvg from '@ant-design/icons-svg/lib/asn/PhoneOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PhoneOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PhoneOutlined: PhoneOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PhoneOutlinedSvg}></AntdIcon>;
};

PhoneOutlined.displayName = 'PhoneOutlined';
PhoneOutlined.inheritAttrs = false;
export default PhoneOutlined;