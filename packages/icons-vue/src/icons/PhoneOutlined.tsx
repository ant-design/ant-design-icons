// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PhoneOutlinedSvg from '@ant-design/icons-svg/lib/asn/PhoneOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PhoneOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PhoneOutlinedSvg}></AntdIcon>;
};

PhoneOutlined.displayName = 'PhoneOutlined';
PhoneOutlined.inheritAttrs = false;
export default PhoneOutlined;