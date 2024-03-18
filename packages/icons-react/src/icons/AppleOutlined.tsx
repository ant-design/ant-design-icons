// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AppleOutlinedSvg from '@ant-design/icons-svg/lib/asn/AppleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AppleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AppleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AppleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AppleOutlined';
}

export default RefIcon;