// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PercentageOutlinedSvg from '@ant-design/icons-svg/lib/asn/PercentageOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PercentageOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PercentageOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PercentageOutlined.displayName = 'PercentageOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PercentageOutlined);