// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UserAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserAddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserAddOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserAddOutlinedSvg}></AntdIcon>;
};

UserAddOutlined.displayName = 'UserAddOutlined';
UserAddOutlined.inheritAttrs = false;
export default UserAddOutlined;