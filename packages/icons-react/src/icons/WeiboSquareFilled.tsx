// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WeiboSquareFilledSvg from '@ant-design/icons-svg/lib/asn/WeiboSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WeiboSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WeiboSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(WeiboSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'WeiboSquareFilled';
}

export default RefIcon;