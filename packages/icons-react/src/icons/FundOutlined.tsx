// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FundOutlinedSvg from '@ant-design/icons-svg/lib/asn/FundOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FundOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FundOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FundOutlined.displayName = 'FundOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FundOutlined);