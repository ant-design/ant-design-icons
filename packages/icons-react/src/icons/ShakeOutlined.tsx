// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ShakeOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShakeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShakeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShakeOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ShakeOutlined.displayName = 'ShakeOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ShakeOutlined);