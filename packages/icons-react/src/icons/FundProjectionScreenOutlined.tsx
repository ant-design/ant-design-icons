// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FundProjectionScreenOutlinedSvg from '@ant-design/icons-svg/lib/asn/FundProjectionScreenOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FundProjectionScreenOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FundProjectionScreenOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FundProjectionScreenOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FundProjectionScreenOutlined';
}

export default RefIcon;