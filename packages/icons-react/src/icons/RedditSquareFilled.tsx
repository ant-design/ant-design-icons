// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RedditSquareFilledSvg from '@ant-design/icons-svg/lib/asn/RedditSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RedditSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RedditSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RedditSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RedditSquareFilled';
}

export default RefIcon;