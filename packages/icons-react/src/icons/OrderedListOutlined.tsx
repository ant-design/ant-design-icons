// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import OrderedListOutlinedSvg from '@ant-design/icons-svg/lib/asn/OrderedListOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OrderedListOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OrderedListOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  OrderedListOutlined.displayName = 'OrderedListOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OrderedListOutlined);