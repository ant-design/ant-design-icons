// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GithubFilledSvg from '@ant-design/icons-svg/lib/asn/GithubFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GithubFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GithubFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  GithubFilled.displayName = 'GithubFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GithubFilled);