// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PrinterOutlinedSvg from '@ant-design/icons-svg/lib/asn/PrinterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PrinterOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PrinterOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PrinterOutlined.displayName = 'PrinterOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PrinterOutlined);