// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UserAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserAddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserAddOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserAddOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  UserAddOutlined.displayName = 'UserAddOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserAddOutlined);