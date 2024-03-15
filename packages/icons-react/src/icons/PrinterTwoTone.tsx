// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PrinterTwoToneSvg from '@ant-design/icons-svg/lib/asn/PrinterTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PrinterTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PrinterTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PrinterTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PrinterTwoTone';
}

export default RefIcon;