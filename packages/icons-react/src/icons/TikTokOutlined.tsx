// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TikTokOutlinedSvg from '@ant-design/icons-svg/lib/asn/TikTokOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TikTokOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TikTokOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  TikTokOutlined.displayName = 'TikTokOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TikTokOutlined);