// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SecurityScanTwoToneSvg from '@ant-design/icons-svg/lib/asn/SecurityScanTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SecurityScanTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SecurityScanTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SecurityScanTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SecurityScanTwoTone';
}

export default RefIcon;