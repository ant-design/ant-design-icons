// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DownSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DownSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DownSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DownSquareFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DownSquareFilled.displayName = 'DownSquareFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DownSquareFilled);