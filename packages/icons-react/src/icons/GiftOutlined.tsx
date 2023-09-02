// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GiftOutlinedSvg from '@ant-design/icons-svg/lib/asn/GiftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GiftOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GiftOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  GiftOutlined.displayName = 'GiftOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GiftOutlined);