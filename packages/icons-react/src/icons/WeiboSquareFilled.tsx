// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WeiboSquareFilledSvg from '@ant-design/icons-svg/lib/asn/WeiboSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WeiboSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WeiboSquareFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  WeiboSquareFilled.displayName = 'WeiboSquareFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WeiboSquareFilled);