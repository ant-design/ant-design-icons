// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ProfileOutlinedSvg from '@ant-design/icons-svg/lib/asn/ProfileOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProfileOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProfileOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ProfileOutlined.displayName = 'ProfileOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProfileOutlined);