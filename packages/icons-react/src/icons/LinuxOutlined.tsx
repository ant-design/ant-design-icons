// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LinuxOutlinedSvg from '@ant-design/icons-svg/lib/asn/LinuxOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LinuxOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LinuxOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  LinuxOutlined.displayName = 'LinuxOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LinuxOutlined);