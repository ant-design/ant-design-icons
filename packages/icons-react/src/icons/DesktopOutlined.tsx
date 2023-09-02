// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DesktopOutlinedSvg from '@ant-design/icons-svg/lib/asn/DesktopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DesktopOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DesktopOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DesktopOutlined.displayName = 'DesktopOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DesktopOutlined);