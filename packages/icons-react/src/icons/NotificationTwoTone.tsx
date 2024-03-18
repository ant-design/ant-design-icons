// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import NotificationTwoToneSvg from '@ant-design/icons-svg/lib/asn/NotificationTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NotificationTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NotificationTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(NotificationTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'NotificationTwoTone';
}

export default RefIcon;