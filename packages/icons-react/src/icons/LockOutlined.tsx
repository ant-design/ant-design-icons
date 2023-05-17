// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LockOutlinedSvg from '@ant-design/icons-svg/lib/asn/LockOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LockOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LockOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  LockOutlined.displayName = 'LockOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LockOutlined);