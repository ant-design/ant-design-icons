// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import NotificationFilledSvg from '@ant-design/icons-svg/lib/asn/NotificationFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NotificationFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NotificationFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(NotificationFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'NotificationFilled';
}

export default RefIcon;