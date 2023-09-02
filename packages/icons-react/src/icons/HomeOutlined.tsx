// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HomeOutlinedSvg from '@ant-design/icons-svg/lib/asn/HomeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HomeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HomeOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  HomeOutlined.displayName = 'HomeOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HomeOutlined);