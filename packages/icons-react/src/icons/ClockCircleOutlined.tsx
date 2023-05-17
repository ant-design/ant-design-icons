// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ClockCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/ClockCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClockCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ClockCircleOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ClockCircleOutlined.displayName = 'ClockCircleOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ClockCircleOutlined);