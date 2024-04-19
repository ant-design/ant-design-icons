// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TwitchFilledSvg from '@ant-design/icons-svg/lib/asn/TwitchFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TwitchFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TwitchFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  TwitchFilled.displayName = 'TwitchFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TwitchFilled);