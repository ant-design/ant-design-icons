// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RightSquareFilledSvg from '@ant-design/icons-svg/lib/asn/RightSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RightSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RightSquareFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  RightSquareFilled.displayName = 'RightSquareFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RightSquareFilled);