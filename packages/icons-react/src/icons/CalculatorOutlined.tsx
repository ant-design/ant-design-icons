// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CalculatorOutlinedSvg from '@ant-design/icons-svg/lib/asn/CalculatorOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalculatorOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CalculatorOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CalculatorOutlined.displayName = 'CalculatorOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CalculatorOutlined);