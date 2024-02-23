// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TikTokFilledSvg from '@ant-design/icons-svg/lib/asn/TikTokFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TikTokFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TikTokFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  TikTokFilled.displayName = 'TikTokFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TikTokFilled);