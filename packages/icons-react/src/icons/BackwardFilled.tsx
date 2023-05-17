// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BackwardFilledSvg from '@ant-design/icons-svg/lib/asn/BackwardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BackwardFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BackwardFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BackwardFilled.displayName = 'BackwardFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BackwardFilled);