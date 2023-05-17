// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AuditOutlinedSvg from '@ant-design/icons-svg/lib/asn/AuditOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AuditOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AuditOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  AuditOutlined.displayName = 'AuditOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AuditOutlined);