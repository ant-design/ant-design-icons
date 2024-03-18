// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TruckFilledSvg from '@ant-design/icons-svg/lib/asn/TruckFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TruckFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TruckFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TruckFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TruckFilled';
}

export default RefIcon;