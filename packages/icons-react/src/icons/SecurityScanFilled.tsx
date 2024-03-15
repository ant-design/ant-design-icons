// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SecurityScanFilledSvg from '@ant-design/icons-svg/lib/asn/SecurityScanFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SecurityScanFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SecurityScanFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SecurityScanFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SecurityScanFilled';
}

export default RefIcon;