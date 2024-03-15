// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BorderHorizontalOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderHorizontalOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BorderHorizontalOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BorderHorizontalOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BorderHorizontalOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BorderHorizontalOutlined';
}

export default RefIcon;