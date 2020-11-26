// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileFilledSvg from '@ant-design/icons-svg/lib/asn/ProfileFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileFilled: ProfileFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileFilledSvg}></AntdIcon>;
};

ProfileFilled.displayName = 'ProfileFilled';
ProfileFilled.inheritAttrs = false;
export default ProfileFilled;