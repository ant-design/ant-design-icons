// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CheckSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CheckSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CheckSquareFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CheckSquareFilled.displayName = 'CheckSquareFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CheckSquareFilled);