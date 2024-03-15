// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WeiboCircleFilledSvg from '@ant-design/icons-svg/lib/asn/WeiboCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WeiboCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WeiboCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(WeiboCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'WeiboCircleFilled';
}

export default RefIcon;