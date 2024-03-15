// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LockFilledSvg from '@ant-design/icons-svg/lib/asn/LockFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LockFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LockFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LockFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LockFilled';
}

export default RefIcon;