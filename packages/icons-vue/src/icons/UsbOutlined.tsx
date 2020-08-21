// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UsbOutlinedSvg from '@ant-design/icons-svg/lib/asn/UsbOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UsbOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UsbOutlinedSvg}></AntdIcon>;
};

UsbOutlined.displayName = 'UsbOutlined';
UsbOutlined.inheritAttrs = false;
export default UsbOutlined;