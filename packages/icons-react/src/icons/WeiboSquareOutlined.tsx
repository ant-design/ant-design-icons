// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WeiboSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/WeiboSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WeiboSquareOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WeiboSquareOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(WeiboSquareOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'WeiboSquareOutlined';
}

export default RefIcon;