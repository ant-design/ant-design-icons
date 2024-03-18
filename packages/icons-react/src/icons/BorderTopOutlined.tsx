// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BorderTopOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderTopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BorderTopOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BorderTopOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BorderTopOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BorderTopOutlined';
}

export default RefIcon;