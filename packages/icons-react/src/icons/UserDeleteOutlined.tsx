// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UserDeleteOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserDeleteOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserDeleteOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserDeleteOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  UserDeleteOutlined.displayName = 'UserDeleteOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserDeleteOutlined);