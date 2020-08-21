// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AppleOutlinedSvg from '@ant-design/icons-svg/lib/asn/AppleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AppleOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AppleOutlinedSvg}></AntdIcon>;
};

AppleOutlined.displayName = 'AppleOutlined';
AppleOutlined.inheritAttrs = false;
export default AppleOutlined;