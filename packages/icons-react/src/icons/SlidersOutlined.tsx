// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SlidersOutlinedSvg from '@ant-design/icons-svg/lib/asn/SlidersOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SlidersOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SlidersOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SlidersOutlined.displayName = 'SlidersOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SlidersOutlined);