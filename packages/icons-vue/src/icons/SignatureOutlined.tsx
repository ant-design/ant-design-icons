// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SignatureOutlinedSvg from '@ant-design/icons-svg/lib/asn/SignatureOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SignatureOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SignatureOutlined: SignatureOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SignatureOutlinedSvg}></AntdIcon>;
};

SignatureOutlined.displayName = 'SignatureOutlined';
SignatureOutlined.inheritAttrs = false;
export default SignatureOutlined;