// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UserSwitchOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserSwitchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSwitchOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserSwitchOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  UserSwitchOutlined.displayName = 'UserSwitchOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserSwitchOutlined);