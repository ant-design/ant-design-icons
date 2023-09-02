// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ShoppingCartOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShoppingCartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShoppingCartOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShoppingCartOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ShoppingCartOutlined.displayName = 'ShoppingCartOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ShoppingCartOutlined);