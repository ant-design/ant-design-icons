// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PullRequestOutlinedSvg from '@ant-design/icons-svg/lib/asn/PullRequestOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PullRequestOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PullRequestOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PullRequestOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PullRequestOutlined';
}

export default RefIcon;