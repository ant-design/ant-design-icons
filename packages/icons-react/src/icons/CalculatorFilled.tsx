// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CalculatorFilledSvg from '@ant-design/icons-svg/lib/asn/CalculatorFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalculatorFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CalculatorFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CalculatorFilled.displayName = 'CalculatorFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CalculatorFilled);