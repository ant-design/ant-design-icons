// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CameraOutlinedSvg from '@ant-design/icons-svg/lib/asn/CameraOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CameraOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CameraOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CameraOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CameraOutlined';
}

export default RefIcon;