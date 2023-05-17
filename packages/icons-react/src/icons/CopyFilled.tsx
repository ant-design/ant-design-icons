// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CopyFilledSvg from '@ant-design/icons-svg/lib/asn/CopyFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopyFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CopyFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CopyFilled.displayName = 'CopyFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CopyFilled);