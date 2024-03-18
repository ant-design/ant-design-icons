// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SecurityScanOutlinedSvg from '@ant-design/icons-svg/lib/asn/SecurityScanOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SecurityScanOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SecurityScanOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SecurityScanOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SecurityScanOutlined';
}

export default RefIcon;