// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ProfileFilledSvg from '@ant-design/icons-svg/lib/asn/ProfileFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProfileFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileFilledSvg}></AntdIcon>;
};

ProfileFilled.displayName = 'ProfileFilled';
ProfileFilled.inheritAttrs = false;
export default ProfileFilled;