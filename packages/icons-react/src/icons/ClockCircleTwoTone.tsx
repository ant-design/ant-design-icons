// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ClockCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ClockCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClockCircleTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ClockCircleTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ClockCircleTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ClockCircleTwoTone';
}

export default RefIcon;