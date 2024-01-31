// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TwitchOutlinedSvg from '@ant-design/icons-svg/lib/asn/TwitchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TwitchOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TwitchOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  TwitchOutlined.displayName = 'TwitchOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TwitchOutlined);