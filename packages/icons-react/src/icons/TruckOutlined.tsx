// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TruckOutlinedSvg from '@ant-design/icons-svg/lib/asn/TruckOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TruckOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TruckOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  TruckOutlined.displayName = 'TruckOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TruckOutlined);