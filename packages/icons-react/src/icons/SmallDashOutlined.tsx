// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SmallDashOutlinedSvg from '@ant-design/icons-svg/lib/asn/SmallDashOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SmallDashOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SmallDashOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SmallDashOutlined.displayName = 'SmallDashOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SmallDashOutlined);