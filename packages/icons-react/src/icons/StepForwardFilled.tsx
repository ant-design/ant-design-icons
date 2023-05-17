// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StepForwardFilledSvg from '@ant-design/icons-svg/lib/asn/StepForwardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StepForwardFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StepForwardFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  StepForwardFilled.displayName = 'StepForwardFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StepForwardFilled);