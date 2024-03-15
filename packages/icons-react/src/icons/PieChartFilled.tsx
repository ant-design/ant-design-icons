// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PieChartFilledSvg from '@ant-design/icons-svg/lib/asn/PieChartFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PieChartFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PieChartFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PieChartFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PieChartFilled';
}

export default RefIcon;