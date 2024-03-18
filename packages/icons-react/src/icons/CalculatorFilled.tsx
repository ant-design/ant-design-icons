// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CalculatorFilledSvg from '@ant-design/icons-svg/lib/asn/CalculatorFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalculatorFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CalculatorFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CalculatorFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CalculatorFilled';
}

export default RefIcon;