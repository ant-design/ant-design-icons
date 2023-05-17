// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GiftFilledSvg from '@ant-design/icons-svg/lib/asn/GiftFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GiftFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GiftFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  GiftFilled.displayName = 'GiftFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GiftFilled);