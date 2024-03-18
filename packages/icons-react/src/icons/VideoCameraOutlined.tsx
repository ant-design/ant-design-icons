// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import VideoCameraOutlinedSvg from '@ant-design/icons-svg/lib/asn/VideoCameraOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VideoCameraOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VideoCameraOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(VideoCameraOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'VideoCameraOutlined';
}

export default RefIcon;