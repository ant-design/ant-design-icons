// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PushpinOutlinedSvg from '@ant-design/icons-svg/lib/asn/PushpinOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PushpinOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PushpinOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PushpinOutlined.displayName = 'PushpinOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PushpinOutlined);