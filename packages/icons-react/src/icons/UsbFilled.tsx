// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UsbFilledSvg from '@ant-design/icons-svg/lib/asn/UsbFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UsbFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UsbFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(UsbFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UsbFilled';
}

export default RefIcon;