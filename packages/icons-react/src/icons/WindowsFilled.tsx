// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WindowsFilledSvg from '@ant-design/icons-svg/lib/asn/WindowsFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WindowsFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WindowsFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(WindowsFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'WindowsFilled';
}

export default RefIcon;