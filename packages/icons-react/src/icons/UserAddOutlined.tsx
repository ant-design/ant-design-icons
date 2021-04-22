// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UserAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserAddOutlined';
import AntdIcon, { AntdIconProps, ForwardRefBaseComponent } from '../components/AntdIcon';

const UserAddOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserAddOutlinedSvg} />;

UserAddOutlined.displayName = 'UserAddOutlined';

const Comp: ForwardRefBaseComponent<AntdIconProps> = React.forwardRef<HTMLSpanElement, AntdIconProps>(UserAddOutlined);
export default Comp;