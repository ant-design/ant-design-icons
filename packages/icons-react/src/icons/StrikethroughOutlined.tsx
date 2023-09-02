// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StrikethroughOutlinedSvg from '@ant-design/icons-svg/lib/asn/StrikethroughOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StrikethroughOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StrikethroughOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  StrikethroughOutlined.displayName = 'StrikethroughOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StrikethroughOutlined);