// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ShopFilledSvg from '@ant-design/icons-svg/lib/asn/ShopFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShopFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShopFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ShopFilled.displayName = 'ShopFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ShopFilled);