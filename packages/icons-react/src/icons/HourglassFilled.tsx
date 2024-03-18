// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HourglassFilledSvg from '@ant-design/icons-svg/lib/asn/HourglassFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HourglassFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HourglassFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(HourglassFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'HourglassFilled';
}

export default RefIcon;