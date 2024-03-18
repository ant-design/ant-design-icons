// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WeiboCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/WeiboCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WeiboCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WeiboCircleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(WeiboCircleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'WeiboCircleOutlined';
}

export default RefIcon;