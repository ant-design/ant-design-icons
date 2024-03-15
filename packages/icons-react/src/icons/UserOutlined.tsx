// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UserOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(UserOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UserOutlined';
}

export default RefIcon;