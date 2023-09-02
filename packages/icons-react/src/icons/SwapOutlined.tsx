// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SwapOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwapOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SwapOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SwapOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SwapOutlined.displayName = 'SwapOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SwapOutlined);