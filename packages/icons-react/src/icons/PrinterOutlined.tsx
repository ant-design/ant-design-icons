// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PrinterOutlinedSvg from '@ant-design/icons-svg/lib/asn/PrinterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PrinterOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PrinterOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PrinterOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PrinterOutlined';
}

export default RefIcon;