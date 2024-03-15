// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GatewayOutlinedSvg from '@ant-design/icons-svg/lib/asn/GatewayOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GatewayOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GatewayOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(GatewayOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GatewayOutlined';
}

export default RefIcon;