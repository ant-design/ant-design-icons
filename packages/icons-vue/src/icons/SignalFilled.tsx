// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SignalFilledSvg from '@ant-design/icons-svg/lib/asn/SignalFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SignalFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SignalFilled: SignalFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SignalFilledSvg}></AntdIcon>;
};

SignalFilled.displayName = 'SignalFilled';
SignalFilled.inheritAttrs = false;
export default SignalFilled;