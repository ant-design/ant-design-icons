// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserAddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserAddOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserAddOutlined: UserAddOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserAddOutlinedSvg}></AntdIcon>;
};

UserAddOutlined.displayName = 'UserAddOutlined';
UserAddOutlined.inheritAttrs = false;
export default UserAddOutlined;