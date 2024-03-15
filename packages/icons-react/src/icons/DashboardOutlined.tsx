// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DashboardOutlinedSvg from '@ant-design/icons-svg/lib/asn/DashboardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DashboardOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DashboardOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DashboardOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DashboardOutlined';
}

export default RefIcon;