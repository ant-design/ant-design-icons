// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TeamOutlinedSvg from '@ant-design/icons-svg/lib/asn/TeamOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TeamOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TeamOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  TeamOutlined.displayName = 'TeamOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TeamOutlined);