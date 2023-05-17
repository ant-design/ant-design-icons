// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HeatMapOutlinedSvg from '@ant-design/icons-svg/lib/asn/HeatMapOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeatMapOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HeatMapOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  HeatMapOutlined.displayName = 'HeatMapOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HeatMapOutlined);