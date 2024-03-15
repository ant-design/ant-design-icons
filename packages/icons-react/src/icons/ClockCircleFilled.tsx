// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ClockCircleFilledSvg from '@ant-design/icons-svg/lib/asn/ClockCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClockCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ClockCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ClockCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ClockCircleFilled';
}

export default RefIcon;