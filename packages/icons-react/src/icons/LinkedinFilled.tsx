// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LinkedinFilledSvg from '@ant-design/icons-svg/lib/asn/LinkedinFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LinkedinFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LinkedinFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  LinkedinFilled.displayName = 'LinkedinFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LinkedinFilled);