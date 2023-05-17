// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StopFilledSvg from '@ant-design/icons-svg/lib/asn/StopFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StopFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StopFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  StopFilled.displayName = 'StopFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StopFilled);