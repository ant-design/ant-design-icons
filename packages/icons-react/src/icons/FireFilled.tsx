// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FireFilledSvg from '@ant-design/icons-svg/lib/asn/FireFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FireFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FireFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FireFilled.displayName = 'FireFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FireFilled);