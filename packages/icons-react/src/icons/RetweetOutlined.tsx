// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RetweetOutlinedSvg from '@ant-design/icons-svg/lib/asn/RetweetOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RetweetOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RetweetOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  RetweetOutlined.displayName = 'RetweetOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RetweetOutlined);