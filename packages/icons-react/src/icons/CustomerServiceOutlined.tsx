// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CustomerServiceOutlinedSvg from '@ant-design/icons-svg/lib/asn/CustomerServiceOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CustomerServiceOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CustomerServiceOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CustomerServiceOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CustomerServiceOutlined';
}

export default RefIcon;