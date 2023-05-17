// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UpSquareFilledSvg from '@ant-design/icons-svg/lib/asn/UpSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UpSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UpSquareFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  UpSquareFilled.displayName = 'UpSquareFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UpSquareFilled);