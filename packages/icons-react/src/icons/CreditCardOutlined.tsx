// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CreditCardOutlinedSvg from '@ant-design/icons-svg/lib/asn/CreditCardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CreditCardOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CreditCardOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CreditCardOutlined.displayName = 'CreditCardOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CreditCardOutlined);