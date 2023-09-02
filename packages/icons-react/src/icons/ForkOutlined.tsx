// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ForkOutlinedSvg from '@ant-design/icons-svg/lib/asn/ForkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ForkOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ForkOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ForkOutlined.displayName = 'ForkOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ForkOutlined);