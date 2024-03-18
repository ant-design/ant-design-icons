// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TwitterCircleFilledSvg from '@ant-design/icons-svg/lib/asn/TwitterCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TwitterCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TwitterCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TwitterCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TwitterCircleFilled';
}

export default RefIcon;