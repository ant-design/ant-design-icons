// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProfileTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileTwoTone: ProfileTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileTwoToneSvg}></AntdIcon>;
};

ProfileTwoTone.displayName = 'ProfileTwoTone';
ProfileTwoTone.inheritAttrs = false;
export default ProfileTwoTone;