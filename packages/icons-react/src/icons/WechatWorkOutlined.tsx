// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WechatWorkOutlinedSvg from '@ant-design/icons-svg/lib/asn/WechatWorkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WechatWorkOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WechatWorkOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(WechatWorkOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'WechatWorkOutlined';
}

export default RefIcon;