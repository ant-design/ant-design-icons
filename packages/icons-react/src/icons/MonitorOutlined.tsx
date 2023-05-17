// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MonitorOutlinedSvg from '@ant-design/icons-svg/lib/asn/MonitorOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MonitorOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MonitorOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MonitorOutlined.displayName = 'MonitorOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MonitorOutlined);