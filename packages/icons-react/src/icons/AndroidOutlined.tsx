// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AndroidOutlinedSvg from '@ant-design/icons-svg/lib/asn/AndroidOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AndroidOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AndroidOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  AndroidOutlined.displayName = 'AndroidOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AndroidOutlined);