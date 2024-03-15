// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CheckOutlinedSvg from '@ant-design/icons-svg/lib/asn/CheckOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CheckOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CheckOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CheckOutlined';
}

export default RefIcon;