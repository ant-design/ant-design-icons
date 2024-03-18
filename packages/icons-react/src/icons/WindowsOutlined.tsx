// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WindowsOutlinedSvg from '@ant-design/icons-svg/lib/asn/WindowsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WindowsOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WindowsOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(WindowsOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'WindowsOutlined';
}

export default RefIcon;