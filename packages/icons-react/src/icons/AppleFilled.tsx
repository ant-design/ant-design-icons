// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AppleFilledSvg from '@ant-design/icons-svg/lib/asn/AppleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AppleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AppleFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  AppleFilled.displayName = 'AppleFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AppleFilled);