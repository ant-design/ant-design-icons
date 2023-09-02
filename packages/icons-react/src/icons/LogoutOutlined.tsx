// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LogoutOutlinedSvg from '@ant-design/icons-svg/lib/asn/LogoutOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogoutOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LogoutOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  LogoutOutlined.displayName = 'LogoutOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LogoutOutlined);