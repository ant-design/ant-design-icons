// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LoginOutlinedSvg from '@ant-design/icons-svg/lib/asn/LoginOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LoginOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LoginOutlined: LoginOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LoginOutlinedSvg}></AntdIcon>;
};

LoginOutlined.displayName = 'LoginOutlined';
LoginOutlined.inheritAttrs = false;
export default LoginOutlined;