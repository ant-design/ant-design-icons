// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ShoppingFilledSvg from '@ant-design/icons-svg/lib/asn/ShoppingFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShoppingFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShoppingFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ShoppingFilled.displayName = 'ShoppingFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ShoppingFilled);