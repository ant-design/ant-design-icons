// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CalendarFilledSvg from '@ant-design/icons-svg/lib/asn/CalendarFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalendarFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CalendarFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CalendarFilled.displayName = 'CalendarFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CalendarFilled);