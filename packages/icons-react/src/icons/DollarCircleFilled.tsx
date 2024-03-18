// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DollarCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DollarCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DollarCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DollarCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DollarCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DollarCircleFilled';
}

export default RefIcon;