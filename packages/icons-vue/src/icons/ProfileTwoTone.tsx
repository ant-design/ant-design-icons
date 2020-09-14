// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ProfileTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProfileTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProfileTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileTwoToneSvg}></AntdIcon>;
};

ProfileTwoTone.displayName = 'ProfileTwoTone';
ProfileTwoTone.inheritAttrs = false;
export default ProfileTwoTone;