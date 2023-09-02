// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SecurityScanFilledSvg from '@ant-design/icons-svg/lib/asn/SecurityScanFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SecurityScanFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SecurityScanFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SecurityScanFilled.displayName = 'SecurityScanFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SecurityScanFilled);