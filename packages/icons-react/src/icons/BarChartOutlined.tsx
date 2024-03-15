// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BarChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/BarChartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BarChartOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BarChartOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BarChartOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BarChartOutlined';
}

export default RefIcon;