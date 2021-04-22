// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LoginOutlinedSvg from '@ant-design/icons-svg/lib/asn/LoginOutlined';
import AntdIcon, { AntdIconProps, ForwardRefComponentBase } from '../components/AntdIcon';

const LoginOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LoginOutlinedSvg} />;

LoginOutlined.displayName = 'LoginOutlined';

const Comp: ForwardRefComponentBase<AntdIconProps> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LoginOutlined);
export default Comp;