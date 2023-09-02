// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HighlightFilledSvg from '@ant-design/icons-svg/lib/asn/HighlightFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HighlightFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HighlightFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  HighlightFilled.displayName = 'HighlightFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HighlightFilled);