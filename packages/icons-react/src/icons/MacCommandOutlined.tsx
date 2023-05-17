// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MacCommandOutlinedSvg from '@ant-design/icons-svg/lib/asn/MacCommandOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MacCommandOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MacCommandOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MacCommandOutlined.displayName = 'MacCommandOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MacCommandOutlined);