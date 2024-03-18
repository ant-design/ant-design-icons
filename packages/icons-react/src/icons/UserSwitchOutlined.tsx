// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UserSwitchOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserSwitchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSwitchOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserSwitchOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(UserSwitchOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UserSwitchOutlined';
}

export default RefIcon;