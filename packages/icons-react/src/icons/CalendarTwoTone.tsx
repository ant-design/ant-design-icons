// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CalendarTwoToneSvg from '@ant-design/icons-svg/lib/asn/CalendarTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalendarTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CalendarTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CalendarTwoTone.displayName = 'CalendarTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CalendarTwoTone);