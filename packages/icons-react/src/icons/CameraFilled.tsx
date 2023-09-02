// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CameraFilledSvg from '@ant-design/icons-svg/lib/asn/CameraFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CameraFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CameraFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CameraFilled.displayName = 'CameraFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CameraFilled);