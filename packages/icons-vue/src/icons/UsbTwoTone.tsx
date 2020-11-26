// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UsbTwoToneSvg from '@ant-design/icons-svg/lib/asn/UsbTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UsbTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UsbTwoTone: UsbTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UsbTwoToneSvg}></AntdIcon>;
};

UsbTwoTone.displayName = 'UsbTwoTone';
UsbTwoTone.inheritAttrs = false;
export default UsbTwoTone;