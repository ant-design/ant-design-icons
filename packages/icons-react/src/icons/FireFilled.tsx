// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FireFilledSvg from '@ant-design/icons-svg/lib/asn/FireFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FireFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FireFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FireFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FireFilled';
}

export default RefIcon;