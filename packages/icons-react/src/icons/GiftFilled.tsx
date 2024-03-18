// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GiftFilledSvg from '@ant-design/icons-svg/lib/asn/GiftFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GiftFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GiftFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(GiftFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GiftFilled';
}

export default RefIcon;