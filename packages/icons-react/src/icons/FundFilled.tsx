// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FundFilledSvg from '@ant-design/icons-svg/lib/asn/FundFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FundFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FundFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FundFilled.displayName = 'FundFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FundFilled);