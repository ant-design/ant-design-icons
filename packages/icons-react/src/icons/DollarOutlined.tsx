// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DollarOutlinedSvg from '@ant-design/icons-svg/lib/asn/DollarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DollarOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DollarOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DollarOutlined.displayName = 'DollarOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DollarOutlined);