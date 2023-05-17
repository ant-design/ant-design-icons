// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GoldenFilledSvg from '@ant-design/icons-svg/lib/asn/GoldenFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GoldenFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GoldenFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  GoldenFilled.displayName = 'GoldenFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GoldenFilled);