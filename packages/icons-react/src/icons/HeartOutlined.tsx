// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HeartOutlinedSvg from '@ant-design/icons-svg/lib/asn/HeartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HeartOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  HeartOutlined.displayName = 'HeartOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HeartOutlined);