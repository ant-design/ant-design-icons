// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MonitorOutlinedSvg from '@ant-design/icons-svg/lib/asn/MonitorOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MonitorOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MonitorOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MonitorOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MonitorOutlined';
}

export default RefIcon;