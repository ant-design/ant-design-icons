// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import XFilledSvg from '@ant-design/icons-svg/lib/asn/XFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const XFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={XFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  XFilled.displayName = 'XFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(XFilled);