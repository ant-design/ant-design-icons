// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WechatWorkFilledSvg from '@ant-design/icons-svg/lib/asn/WechatWorkFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WechatWorkFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WechatWorkFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(WechatWorkFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'WechatWorkFilled';
}

export default RefIcon;