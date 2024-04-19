// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BilibiliOutlinedSvg from '@ant-design/icons-svg/lib/asn/BilibiliOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BilibiliOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BilibiliOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BilibiliOutlined.displayName = 'BilibiliOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BilibiliOutlined);