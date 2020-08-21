// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserSwitchOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserSwitchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSwitchOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserSwitchOutlinedSvg}></AntdIcon>;
};

UserSwitchOutlined.displayName = 'UserSwitchOutlined';
UserSwitchOutlined.inheritAttrs = false;
export default UserSwitchOutlined;