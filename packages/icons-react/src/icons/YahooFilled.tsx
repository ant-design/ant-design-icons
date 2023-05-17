// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import YahooFilledSvg from '@ant-design/icons-svg/lib/asn/YahooFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const YahooFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={YahooFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  YahooFilled.displayName = 'YahooFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(YahooFilled);