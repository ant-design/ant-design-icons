// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileOutlinedSvg from '@ant-design/icons-svg/lib/asn/ProfileOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileOutlined: ProfileOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileOutlinedSvg}></AntdIcon>;
};

ProfileOutlined.displayName = 'ProfileOutlined';
ProfileOutlined.inheritAttrs = false;
export default ProfileOutlined;