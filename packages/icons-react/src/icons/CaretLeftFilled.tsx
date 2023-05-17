// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CaretLeftFilledSvg from '@ant-design/icons-svg/lib/asn/CaretLeftFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretLeftFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CaretLeftFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CaretLeftFilled.displayName = 'CaretLeftFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CaretLeftFilled);