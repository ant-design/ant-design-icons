// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import NotificationOutlinedSvg from '@ant-design/icons-svg/lib/asn/NotificationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NotificationOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NotificationOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  NotificationOutlined.displayName = 'NotificationOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NotificationOutlined);