// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CoffeeOutlinedSvg from '@ant-design/icons-svg/lib/asn/CoffeeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CoffeeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CoffeeOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CoffeeOutlined.displayName = 'CoffeeOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CoffeeOutlined);