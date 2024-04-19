// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TruckFilledSvg from '@ant-design/icons-svg/lib/asn/TruckFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TruckFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TruckFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  TruckFilled.displayName = 'TruckFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TruckFilled);