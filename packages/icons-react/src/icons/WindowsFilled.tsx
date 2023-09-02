// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WindowsFilledSvg from '@ant-design/icons-svg/lib/asn/WindowsFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WindowsFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WindowsFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  WindowsFilled.displayName = 'WindowsFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WindowsFilled);