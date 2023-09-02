// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UsbTwoToneSvg from '@ant-design/icons-svg/lib/asn/UsbTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UsbTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UsbTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  UsbTwoTone.displayName = 'UsbTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UsbTwoTone);