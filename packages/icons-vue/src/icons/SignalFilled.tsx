// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SignalFilledSvg from '@ant-design/icons-svg/lib/asn/SignalFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SignalFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SignalFilledSvg}></AntdIcon>;
};

SignalFilled.displayName = 'SignalFilled';
SignalFilled.inheritAttrs = false;
export default SignalFilled;