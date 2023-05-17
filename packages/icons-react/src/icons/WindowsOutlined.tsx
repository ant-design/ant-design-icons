// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WindowsOutlinedSvg from '@ant-design/icons-svg/lib/asn/WindowsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WindowsOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WindowsOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  WindowsOutlined.displayName = 'WindowsOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WindowsOutlined);