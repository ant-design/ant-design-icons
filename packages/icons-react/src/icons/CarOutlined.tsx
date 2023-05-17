// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CarOutlinedSvg from '@ant-design/icons-svg/lib/asn/CarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CarOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CarOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CarOutlined.displayName = 'CarOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CarOutlined);