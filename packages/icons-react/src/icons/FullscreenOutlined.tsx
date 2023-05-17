// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FullscreenOutlinedSvg from '@ant-design/icons-svg/lib/asn/FullscreenOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FullscreenOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FullscreenOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FullscreenOutlined.displayName = 'FullscreenOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FullscreenOutlined);