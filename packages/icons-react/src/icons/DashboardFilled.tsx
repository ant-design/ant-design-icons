// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DashboardFilledSvg from '@ant-design/icons-svg/lib/asn/DashboardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DashboardFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DashboardFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DashboardFilled.displayName = 'DashboardFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DashboardFilled);