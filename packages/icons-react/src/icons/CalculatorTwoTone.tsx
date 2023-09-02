// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CalculatorTwoToneSvg from '@ant-design/icons-svg/lib/asn/CalculatorTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalculatorTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CalculatorTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CalculatorTwoTone.displayName = 'CalculatorTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CalculatorTwoTone);