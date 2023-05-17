// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ScheduleOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScheduleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ScheduleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ScheduleOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ScheduleOutlined.displayName = 'ScheduleOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ScheduleOutlined);