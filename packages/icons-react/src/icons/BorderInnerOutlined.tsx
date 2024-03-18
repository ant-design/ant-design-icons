// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BorderInnerOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderInnerOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BorderInnerOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BorderInnerOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BorderInnerOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BorderInnerOutlined';
}

export default RefIcon;