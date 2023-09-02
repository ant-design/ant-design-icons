// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LockFilledSvg from '@ant-design/icons-svg/lib/asn/LockFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LockFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LockFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  LockFilled.displayName = 'LockFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LockFilled);