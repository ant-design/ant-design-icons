// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WechatOutlinedSvg from '@ant-design/icons-svg/lib/asn/WechatOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WechatOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WechatOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(WechatOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'WechatOutlined';
}

export default RefIcon;