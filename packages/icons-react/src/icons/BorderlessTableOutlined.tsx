// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BorderlessTableOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderlessTableOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BorderlessTableOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BorderlessTableOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BorderlessTableOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BorderlessTableOutlined';
}

export default RefIcon;