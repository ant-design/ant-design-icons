// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AndroidFilledSvg from '@ant-design/icons-svg/lib/asn/AndroidFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AndroidFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AndroidFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  AndroidFilled.displayName = 'AndroidFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AndroidFilled);