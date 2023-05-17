// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CalendarOutlinedSvg from '@ant-design/icons-svg/lib/asn/CalendarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalendarOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CalendarOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CalendarOutlined.displayName = 'CalendarOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CalendarOutlined);