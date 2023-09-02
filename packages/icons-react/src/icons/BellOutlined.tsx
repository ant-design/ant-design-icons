// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BellOutlinedSvg from '@ant-design/icons-svg/lib/asn/BellOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BellOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BellOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BellOutlined.displayName = 'BellOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BellOutlined);