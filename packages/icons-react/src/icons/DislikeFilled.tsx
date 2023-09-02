// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DislikeFilledSvg from '@ant-design/icons-svg/lib/asn/DislikeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DislikeFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DislikeFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DislikeFilled.displayName = 'DislikeFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DislikeFilled);