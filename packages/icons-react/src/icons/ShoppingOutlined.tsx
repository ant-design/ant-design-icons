// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ShoppingOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShoppingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShoppingOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShoppingOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ShoppingOutlined.displayName = 'ShoppingOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ShoppingOutlined);