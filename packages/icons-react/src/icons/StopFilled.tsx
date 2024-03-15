// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StopFilledSvg from '@ant-design/icons-svg/lib/asn/StopFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StopFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StopFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(StopFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'StopFilled';
}

export default RefIcon;