// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserDeleteOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserDeleteOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserDeleteOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserDeleteOutlined: UserDeleteOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserDeleteOutlinedSvg}></AntdIcon>;
};

UserDeleteOutlined.displayName = 'UserDeleteOutlined';
UserDeleteOutlined.inheritAttrs = false;
export default UserDeleteOutlined;