// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UsbFilledSvg from '@ant-design/icons-svg/lib/asn/UsbFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UsbFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UsbFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  UsbFilled.displayName = 'UsbFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UsbFilled);