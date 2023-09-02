// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EyeOutlinedSvg from '@ant-design/icons-svg/lib/asn/EyeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EyeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EyeOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  EyeOutlined.displayName = 'EyeOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EyeOutlined);