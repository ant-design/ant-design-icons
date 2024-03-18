// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BorderOuterOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderOuterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BorderOuterOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BorderOuterOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BorderOuterOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BorderOuterOutlined';
}

export default RefIcon;