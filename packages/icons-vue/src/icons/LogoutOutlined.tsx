// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LogoutOutlinedSvg from '@ant-design/icons-svg/lib/asn/LogoutOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogoutOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LogoutOutlinedSvg}></AntdIcon>;
};

LogoutOutlined.displayName = 'LogoutOutlined';
LogoutOutlined.inheritAttrs = false;
export default LogoutOutlined;