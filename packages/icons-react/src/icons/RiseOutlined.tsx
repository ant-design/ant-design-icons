// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RiseOutlinedSvg from '@ant-design/icons-svg/lib/asn/RiseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RiseOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RiseOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RiseOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RiseOutlined';
}

export default RefIcon;