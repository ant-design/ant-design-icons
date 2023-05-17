// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SmileFilledSvg from '@ant-design/icons-svg/lib/asn/SmileFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SmileFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SmileFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SmileFilled.displayName = 'SmileFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SmileFilled);