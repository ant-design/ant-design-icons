// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CustomerServiceFilledSvg from '@ant-design/icons-svg/lib/asn/CustomerServiceFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CustomerServiceFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CustomerServiceFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CustomerServiceFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CustomerServiceFilled';
}

export default RefIcon;