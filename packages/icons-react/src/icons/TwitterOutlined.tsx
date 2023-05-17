// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TwitterOutlinedSvg from '@ant-design/icons-svg/lib/asn/TwitterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TwitterOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TwitterOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  TwitterOutlined.displayName = 'TwitterOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TwitterOutlined);