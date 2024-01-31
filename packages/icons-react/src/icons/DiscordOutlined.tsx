// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DiscordOutlinedSvg from '@ant-design/icons-svg/lib/asn/DiscordOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DiscordOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DiscordOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DiscordOutlined.displayName = 'DiscordOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DiscordOutlined);