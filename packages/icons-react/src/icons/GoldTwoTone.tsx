// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GoldTwoToneSvg from '@ant-design/icons-svg/lib/asn/GoldTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GoldTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GoldTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(GoldTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GoldTwoTone';
}

export default RefIcon;