// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WechatOutlinedSvg from '@ant-design/icons-svg/lib/asn/WechatOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WechatOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WechatOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  WechatOutlined.displayName = 'WechatOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WechatOutlined);