// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserOutlined: UserOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserOutlinedSvg}></AntdIcon>;
};

UserOutlined.displayName = 'UserOutlined';
UserOutlined.inheritAttrs = false;
export default UserOutlined;