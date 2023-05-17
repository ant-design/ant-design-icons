// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DashboardOutlinedSvg from '@ant-design/icons-svg/lib/asn/DashboardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DashboardOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DashboardOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DashboardOutlined.displayName = 'DashboardOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DashboardOutlined);