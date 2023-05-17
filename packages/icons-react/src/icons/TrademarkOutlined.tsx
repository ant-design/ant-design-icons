// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TrademarkOutlinedSvg from '@ant-design/icons-svg/lib/asn/TrademarkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrademarkOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TrademarkOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  TrademarkOutlined.displayName = 'TrademarkOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TrademarkOutlined);