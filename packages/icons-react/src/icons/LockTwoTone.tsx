// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LockTwoToneSvg from '@ant-design/icons-svg/lib/asn/LockTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LockTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LockTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LockTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LockTwoTone';
}

export default RefIcon;