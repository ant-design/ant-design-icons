// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UnlockOutlinedSvg from '@ant-design/icons-svg/lib/asn/UnlockOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UnlockOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UnlockOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  UnlockOutlined.displayName = 'UnlockOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UnlockOutlined);