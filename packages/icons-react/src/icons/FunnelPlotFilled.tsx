// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FunnelPlotFilledSvg from '@ant-design/icons-svg/lib/asn/FunnelPlotFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FunnelPlotFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FunnelPlotFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FunnelPlotFilled.displayName = 'FunnelPlotFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FunnelPlotFilled);