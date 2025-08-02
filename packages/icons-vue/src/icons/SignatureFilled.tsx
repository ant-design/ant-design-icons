// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SignatureFilledSvg from '@ant-design/icons-svg/lib/asn/SignatureFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SignatureFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SignatureFilled: SignatureFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SignatureFilledSvg}></AntdIcon>;
};

SignatureFilled.displayName = 'SignatureFilled';
SignatureFilled.inheritAttrs = false;
export default SignatureFilled;