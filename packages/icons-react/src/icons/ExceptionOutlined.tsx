// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ExceptionOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExceptionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExceptionOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ExceptionOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ExceptionOutlined.displayName = 'ExceptionOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ExceptionOutlined);