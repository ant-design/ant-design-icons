// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FundViewOutlinedSvg from '@ant-design/icons-svg/lib/asn/FundViewOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FundViewOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FundViewOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FundViewOutlined.displayName = 'FundViewOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FundViewOutlined);