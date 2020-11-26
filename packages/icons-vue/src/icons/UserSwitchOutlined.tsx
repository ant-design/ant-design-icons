// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserSwitchOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserSwitchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserSwitchOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserSwitchOutlined: UserSwitchOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserSwitchOutlinedSvg}></AntdIcon>;
};

UserSwitchOutlined.displayName = 'UserSwitchOutlined';
UserSwitchOutlined.inheritAttrs = false;
export default UserSwitchOutlined;