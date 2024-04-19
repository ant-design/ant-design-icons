// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import XOutlinedSvg from '@ant-design/icons-svg/lib/asn/XOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const XOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={XOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  XOutlined.displayName = 'XOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(XOutlined);