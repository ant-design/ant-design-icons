// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LinuxOutlinedSvg from '@ant-design/icons-svg/lib/asn/LinuxOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LinuxOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LinuxOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LinuxOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LinuxOutlined';
}

export default RefIcon;