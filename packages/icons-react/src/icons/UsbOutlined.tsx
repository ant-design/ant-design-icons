// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UsbOutlinedSvg from '@ant-design/icons-svg/lib/asn/UsbOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UsbOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UsbOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  UsbOutlined.displayName = 'UsbOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UsbOutlined);