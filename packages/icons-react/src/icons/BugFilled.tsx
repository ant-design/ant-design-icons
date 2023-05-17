// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BugFilledSvg from '@ant-design/icons-svg/lib/asn/BugFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BugFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BugFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BugFilled.displayName = 'BugFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BugFilled);