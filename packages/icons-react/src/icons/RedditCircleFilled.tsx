// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RedditCircleFilledSvg from '@ant-design/icons-svg/lib/asn/RedditCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RedditCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RedditCircleFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  RedditCircleFilled.displayName = 'RedditCircleFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RedditCircleFilled);