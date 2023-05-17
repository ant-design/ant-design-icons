// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CheckOutlinedSvg from '@ant-design/icons-svg/lib/asn/CheckOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CheckOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CheckOutlined.displayName = 'CheckOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CheckOutlined);