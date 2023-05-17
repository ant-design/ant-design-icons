// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import VideoCameraOutlinedSvg from '@ant-design/icons-svg/lib/asn/VideoCameraOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VideoCameraOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VideoCameraOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  VideoCameraOutlined.displayName = 'VideoCameraOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(VideoCameraOutlined);