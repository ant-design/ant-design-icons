// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MoonOutlinedSvg from '@ant-design/icons-svg/lib/asn/MoonOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoonOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MoonOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MoonOutlined.displayName = 'MoonOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MoonOutlined);