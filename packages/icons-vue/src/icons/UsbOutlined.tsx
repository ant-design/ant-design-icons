// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UsbOutlinedSvg from '@ant-design/icons-svg/lib/asn/UsbOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UsbOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UsbOutlined: UsbOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UsbOutlinedSvg}></AntdIcon>;
};

UsbOutlined.displayName = 'UsbOutlined';
UsbOutlined.inheritAttrs = false;
export default UsbOutlined;