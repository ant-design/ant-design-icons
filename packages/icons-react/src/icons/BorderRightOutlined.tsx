// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BorderRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BorderRightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BorderRightOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BorderRightOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BorderRightOutlined';
}

export default RefIcon;