// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LoginOutlinedSvg from '@ant-design/icons-svg/lib/asn/LoginOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LoginOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LoginOutlinedSvg}></AntdIcon>;
};

LoginOutlined.displayName = 'LoginOutlined';
LoginOutlined.inheritAttrs = false;
export default LoginOutlined;