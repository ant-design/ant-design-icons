// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PinterestFilledSvg from '@ant-design/icons-svg/lib/asn/PinterestFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PinterestFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PinterestFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PinterestFilled.displayName = 'PinterestFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PinterestFilled);