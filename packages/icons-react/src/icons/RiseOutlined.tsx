// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RiseOutlinedSvg from '@ant-design/icons-svg/lib/asn/RiseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RiseOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RiseOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  RiseOutlined.displayName = 'RiseOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RiseOutlined);