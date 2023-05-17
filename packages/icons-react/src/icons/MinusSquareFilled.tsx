// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MinusSquareFilledSvg from '@ant-design/icons-svg/lib/asn/MinusSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MinusSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MinusSquareFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MinusSquareFilled.displayName = 'MinusSquareFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MinusSquareFilled);