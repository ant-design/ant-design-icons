// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlusSquareFilledSvg from '@ant-design/icons-svg/lib/asn/PlusSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlusSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlusSquareFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PlusSquareFilled.displayName = 'PlusSquareFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PlusSquareFilled);