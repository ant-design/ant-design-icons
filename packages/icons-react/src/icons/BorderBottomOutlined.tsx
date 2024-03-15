// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BorderBottomOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderBottomOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BorderBottomOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BorderBottomOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BorderBottomOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BorderBottomOutlined';
}

export default RefIcon;