// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GithubFilledSvg from '@ant-design/icons-svg/lib/asn/GithubFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GithubFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GithubFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(GithubFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GithubFilled';
}

export default RefIcon;