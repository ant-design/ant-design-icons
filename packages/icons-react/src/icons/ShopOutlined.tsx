// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ShopOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShopOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShopOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ShopOutlined.displayName = 'ShopOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ShopOutlined);