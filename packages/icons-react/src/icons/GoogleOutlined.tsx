// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GoogleOutlinedSvg from '@ant-design/icons-svg/lib/asn/GoogleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GoogleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GoogleOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  GoogleOutlined.displayName = 'GoogleOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GoogleOutlined);