// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ProfileTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProfileTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProfileTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProfileTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ProfileTwoTone.displayName = 'ProfileTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProfileTwoTone);