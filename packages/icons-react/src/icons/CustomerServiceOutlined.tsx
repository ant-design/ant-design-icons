// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CustomerServiceOutlinedSvg from '@ant-design/icons-svg/lib/asn/CustomerServiceOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CustomerServiceOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CustomerServiceOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CustomerServiceOutlined.displayName = 'CustomerServiceOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CustomerServiceOutlined);