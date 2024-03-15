// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PrinterFilledSvg from '@ant-design/icons-svg/lib/asn/PrinterFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PrinterFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PrinterFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PrinterFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PrinterFilled';
}

export default RefIcon;