// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DashboardTwoToneSvg from '@ant-design/icons-svg/lib/asn/DashboardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DashboardTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DashboardTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DashboardTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DashboardTwoTone';
}

export default RefIcon;