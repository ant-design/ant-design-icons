// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MoonOutlinedSvg from '@ant-design/icons-svg/lib/asn/MoonOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoonOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MoonOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MoonOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MoonOutlined';
}

export default RefIcon;