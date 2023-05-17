// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RedditOutlinedSvg from '@ant-design/icons-svg/lib/asn/RedditOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RedditOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RedditOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  RedditOutlined.displayName = 'RedditOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RedditOutlined);