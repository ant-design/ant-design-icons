// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RedditCircleFilledSvg from '@ant-design/icons-svg/lib/asn/RedditCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RedditCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RedditCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RedditCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RedditCircleFilled';
}

export default RefIcon;