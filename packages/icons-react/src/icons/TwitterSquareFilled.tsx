// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TwitterSquareFilledSvg from '@ant-design/icons-svg/lib/asn/TwitterSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TwitterSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TwitterSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TwitterSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TwitterSquareFilled';
}

export default RefIcon;