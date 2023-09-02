// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CarFilledSvg from '@ant-design/icons-svg/lib/asn/CarFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CarFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CarFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CarFilled.displayName = 'CarFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CarFilled);