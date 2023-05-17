// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GatewayOutlinedSvg from '@ant-design/icons-svg/lib/asn/GatewayOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GatewayOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GatewayOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  GatewayOutlined.displayName = 'GatewayOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GatewayOutlined);