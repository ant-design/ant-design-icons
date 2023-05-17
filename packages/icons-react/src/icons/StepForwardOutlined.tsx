// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StepForwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/StepForwardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StepForwardOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StepForwardOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  StepForwardOutlined.displayName = 'StepForwardOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StepForwardOutlined);