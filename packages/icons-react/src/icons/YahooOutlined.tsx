// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import YahooOutlinedSvg from '@ant-design/icons-svg/lib/asn/YahooOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const YahooOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={YahooOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  YahooOutlined.displayName = 'YahooOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(YahooOutlined);