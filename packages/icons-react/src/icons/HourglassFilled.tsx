// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HourglassFilledSvg from '@ant-design/icons-svg/lib/asn/HourglassFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HourglassFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HourglassFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  HourglassFilled.displayName = 'HourglassFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HourglassFilled);