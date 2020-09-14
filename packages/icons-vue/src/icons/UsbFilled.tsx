// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UsbFilledSvg from '@ant-design/icons-svg/lib/asn/UsbFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UsbFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UsbFilledSvg}></AntdIcon>;
};

UsbFilled.displayName = 'UsbFilled';
UsbFilled.inheritAttrs = false;
export default UsbFilled;