// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UsbFilledSvg from '@ant-design/icons-svg/lib/asn/UsbFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UsbFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UsbFilled: UsbFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UsbFilledSvg}></AntdIcon>;
};

UsbFilled.displayName = 'UsbFilled';
UsbFilled.inheritAttrs = false;
export default UsbFilled;