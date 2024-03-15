// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LogoutOutlinedSvg from '@ant-design/icons-svg/lib/asn/LogoutOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogoutOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LogoutOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LogoutOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LogoutOutlined';
}

export default RefIcon;