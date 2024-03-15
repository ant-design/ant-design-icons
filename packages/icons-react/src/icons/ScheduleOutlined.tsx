// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ScheduleOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScheduleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ScheduleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ScheduleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ScheduleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ScheduleOutlined';
}

export default RefIcon;