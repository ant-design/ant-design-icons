// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SkinOutlinedSvg from '@ant-design/icons-svg/lib/asn/SkinOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SkinOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SkinOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SkinOutlined.displayName = 'SkinOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SkinOutlined);