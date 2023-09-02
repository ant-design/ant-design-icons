// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RedditSquareFilledSvg from '@ant-design/icons-svg/lib/asn/RedditSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RedditSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RedditSquareFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  RedditSquareFilled.displayName = 'RedditSquareFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RedditSquareFilled);