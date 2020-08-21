// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UsbTwoToneSvg from '@ant-design/icons-svg/lib/asn/UsbTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UsbTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UsbTwoToneSvg}></AntdIcon>;
};

UsbTwoTone.displayName = 'UsbTwoTone';
UsbTwoTone.inheritAttrs = false;
export default UsbTwoTone;