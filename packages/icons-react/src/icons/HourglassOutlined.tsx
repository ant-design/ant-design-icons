// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HourglassOutlinedSvg from '@ant-design/icons-svg/lib/asn/HourglassOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HourglassOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HourglassOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  HourglassOutlined.displayName = 'HourglassOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HourglassOutlined);