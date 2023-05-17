// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CaretRightFilledSvg from '@ant-design/icons-svg/lib/asn/CaretRightFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretRightFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CaretRightFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CaretRightFilled.displayName = 'CaretRightFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CaretRightFilled);