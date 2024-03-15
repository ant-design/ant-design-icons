// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LaptopOutlinedSvg from '@ant-design/icons-svg/lib/asn/LaptopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LaptopOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LaptopOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LaptopOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LaptopOutlined';
}

export default RefIcon;