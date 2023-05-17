// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/GoldOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GoldOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GoldOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  GoldOutlined.displayName = 'GoldOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GoldOutlined);