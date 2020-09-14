// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ProfileOutlinedSvg from '@ant-design/icons-svg/lib/asn/ProfileOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProfileOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileOutlinedSvg}></AntdIcon>;
};

ProfileOutlined.displayName = 'ProfileOutlined';
ProfileOutlined.inheritAttrs = false;
export default ProfileOutlined;