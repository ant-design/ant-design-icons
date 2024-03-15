// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ForkOutlinedSvg from '@ant-design/icons-svg/lib/asn/ForkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ForkOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ForkOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ForkOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ForkOutlined';
}

export default RefIcon;