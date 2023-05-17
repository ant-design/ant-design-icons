// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PrinterFilledSvg from '@ant-design/icons-svg/lib/asn/PrinterFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PrinterFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PrinterFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PrinterFilled.displayName = 'PrinterFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PrinterFilled);