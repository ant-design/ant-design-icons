// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WechatFilledSvg from '@ant-design/icons-svg/lib/asn/WechatFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WechatFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WechatFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  WechatFilled.displayName = 'WechatFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WechatFilled);