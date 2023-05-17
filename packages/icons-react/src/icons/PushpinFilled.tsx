// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PushpinFilledSvg from '@ant-design/icons-svg/lib/asn/PushpinFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PushpinFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PushpinFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PushpinFilled.displayName = 'PushpinFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PushpinFilled);