// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GiftTwoToneSvg from '@ant-design/icons-svg/lib/asn/GiftTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GiftTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GiftTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(GiftTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GiftTwoTone';
}

export default RefIcon;