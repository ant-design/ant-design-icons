// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LoginOutlinedSvg from '@ant-design/icons-svg/lib/asn/LoginOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LoginOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LoginOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LoginOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LoginOutlined';
}

export default RefIcon;