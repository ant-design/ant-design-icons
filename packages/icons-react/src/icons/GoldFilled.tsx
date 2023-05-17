// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GoldFilledSvg from '@ant-design/icons-svg/lib/asn/GoldFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GoldFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GoldFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  GoldFilled.displayName = 'GoldFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GoldFilled);