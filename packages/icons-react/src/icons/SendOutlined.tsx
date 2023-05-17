// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SendOutlinedSvg from '@ant-design/icons-svg/lib/asn/SendOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SendOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SendOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SendOutlined.displayName = 'SendOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SendOutlined);