// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BarChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/BarChartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BarChartOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BarChartOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BarChartOutlined.displayName = 'BarChartOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BarChartOutlined);