// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HddOutlinedSvg from '@ant-design/icons-svg/lib/asn/HddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HddOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HddOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  HddOutlined.displayName = 'HddOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HddOutlined);