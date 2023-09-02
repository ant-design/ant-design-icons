// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RobotFilledSvg from '@ant-design/icons-svg/lib/asn/RobotFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RobotFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RobotFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  RobotFilled.displayName = 'RobotFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RobotFilled);