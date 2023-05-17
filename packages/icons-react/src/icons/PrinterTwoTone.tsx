// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PrinterTwoToneSvg from '@ant-design/icons-svg/lib/asn/PrinterTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PrinterTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PrinterTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PrinterTwoTone.displayName = 'PrinterTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PrinterTwoTone);