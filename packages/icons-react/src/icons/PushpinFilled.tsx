// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PushpinFilledSvg from '@ant-design/icons-svg/lib/asn/PushpinFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PushpinFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PushpinFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PushpinFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PushpinFilled';
}

export default RefIcon;