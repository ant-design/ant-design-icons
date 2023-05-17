// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SecurityScanOutlinedSvg from '@ant-design/icons-svg/lib/asn/SecurityScanOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SecurityScanOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SecurityScanOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SecurityScanOutlined.displayName = 'SecurityScanOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SecurityScanOutlined);