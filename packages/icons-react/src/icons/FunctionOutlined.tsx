// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FunctionOutlinedSvg from '@ant-design/icons-svg/lib/asn/FunctionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FunctionOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FunctionOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FunctionOutlined.displayName = 'FunctionOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FunctionOutlined);