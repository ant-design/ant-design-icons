// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RobotOutlinedSvg from '@ant-design/icons-svg/lib/asn/RobotOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RobotOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RobotOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  RobotOutlined.displayName = 'RobotOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RobotOutlined);