// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CustomerServiceTwoToneSvg from '@ant-design/icons-svg/lib/asn/CustomerServiceTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CustomerServiceTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CustomerServiceTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CustomerServiceTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CustomerServiceTwoTone';
}

export default RefIcon;