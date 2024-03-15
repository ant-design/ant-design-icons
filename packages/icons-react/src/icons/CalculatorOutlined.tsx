// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CalculatorOutlinedSvg from '@ant-design/icons-svg/lib/asn/CalculatorOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalculatorOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CalculatorOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CalculatorOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CalculatorOutlined';
}

export default RefIcon;