// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FunnelPlotOutlinedSvg from '@ant-design/icons-svg/lib/asn/FunnelPlotOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FunnelPlotOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FunnelPlotOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FunnelPlotOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FunnelPlotOutlined';
}

export default RefIcon;