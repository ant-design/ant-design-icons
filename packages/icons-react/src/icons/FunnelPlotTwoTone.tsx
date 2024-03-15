// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FunnelPlotTwoToneSvg from '@ant-design/icons-svg/lib/asn/FunnelPlotTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FunnelPlotTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FunnelPlotTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FunnelPlotTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FunnelPlotTwoTone';
}

export default RefIcon;