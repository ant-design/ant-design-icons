// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserDeleteOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserDeleteOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserDeleteOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserDeleteOutlinedSvg}></AntdIcon>;
};

UserDeleteOutlined.displayName = 'UserDeleteOutlined';
UserDeleteOutlined.inheritAttrs = false;
export default UserDeleteOutlined;