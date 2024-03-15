// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import NotificationOutlinedSvg from '@ant-design/icons-svg/lib/asn/NotificationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NotificationOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NotificationOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(NotificationOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'NotificationOutlined';
}

export default RefIcon;