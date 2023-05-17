// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PullRequestOutlinedSvg from '@ant-design/icons-svg/lib/asn/PullRequestOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PullRequestOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PullRequestOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PullRequestOutlined.displayName = 'PullRequestOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PullRequestOutlined);