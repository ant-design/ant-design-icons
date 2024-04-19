// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PythonOutlinedSvg from '@ant-design/icons-svg/lib/asn/PythonOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PythonOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PythonOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PythonOutlined.displayName = 'PythonOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PythonOutlined);