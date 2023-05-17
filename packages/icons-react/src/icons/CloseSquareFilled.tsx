// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CloseSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CloseSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloseSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloseSquareFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CloseSquareFilled.displayName = 'CloseSquareFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CloseSquareFilled);