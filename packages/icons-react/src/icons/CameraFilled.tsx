// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CameraFilledSvg from '@ant-design/icons-svg/lib/asn/CameraFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CameraFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CameraFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CameraFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CameraFilled';
}

export default RefIcon;