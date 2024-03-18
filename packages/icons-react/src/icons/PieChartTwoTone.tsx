// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PieChartTwoToneSvg from '@ant-design/icons-svg/lib/asn/PieChartTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PieChartTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PieChartTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PieChartTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PieChartTwoTone';
}

export default RefIcon;