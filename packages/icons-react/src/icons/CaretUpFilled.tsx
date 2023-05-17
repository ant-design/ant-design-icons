// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CaretUpFilledSvg from '@ant-design/icons-svg/lib/asn/CaretUpFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretUpFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CaretUpFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CaretUpFilled.displayName = 'CaretUpFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CaretUpFilled);