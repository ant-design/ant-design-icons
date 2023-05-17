// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SignalFilledSvg from '@ant-design/icons-svg/lib/asn/SignalFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SignalFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SignalFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SignalFilled.displayName = 'SignalFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SignalFilled);