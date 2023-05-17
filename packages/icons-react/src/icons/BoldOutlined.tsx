// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/BoldOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BoldOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BoldOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BoldOutlined.displayName = 'BoldOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BoldOutlined);