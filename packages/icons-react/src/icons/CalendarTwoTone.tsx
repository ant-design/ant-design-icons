// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CalendarTwoToneSvg from '@ant-design/icons-svg/lib/asn/CalendarTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalendarTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CalendarTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CalendarTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CalendarTwoTone';
}

export default RefIcon;