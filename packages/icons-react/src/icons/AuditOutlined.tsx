// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AuditOutlinedSvg from '@ant-design/icons-svg/lib/asn/AuditOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AuditOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AuditOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AuditOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AuditOutlined';
}

export default RefIcon;