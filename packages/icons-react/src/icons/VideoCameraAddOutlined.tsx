// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import VideoCameraAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/VideoCameraAddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VideoCameraAddOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VideoCameraAddOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(VideoCameraAddOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'VideoCameraAddOutlined';
}

export default RefIcon;