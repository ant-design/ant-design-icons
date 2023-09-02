// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UserOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  UserOutlined.displayName = 'UserOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserOutlined);