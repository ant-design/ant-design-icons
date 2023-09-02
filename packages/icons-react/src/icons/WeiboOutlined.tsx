// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WeiboOutlinedSvg from '@ant-design/icons-svg/lib/asn/WeiboOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WeiboOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WeiboOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  WeiboOutlined.displayName = 'WeiboOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WeiboOutlined);