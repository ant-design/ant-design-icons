// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ScissorOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScissorOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ScissorOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ScissorOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ScissorOutlined.displayName = 'ScissorOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ScissorOutlined);