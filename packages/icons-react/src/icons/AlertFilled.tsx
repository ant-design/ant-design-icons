// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlertFilledSvg from '@ant-design/icons-svg/lib/asn/AlertFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlertFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlertFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AlertFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AlertFilled';
}

export default RefIcon;