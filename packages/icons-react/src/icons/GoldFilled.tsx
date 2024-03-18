// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GoldFilledSvg from '@ant-design/icons-svg/lib/asn/GoldFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GoldFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GoldFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(GoldFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GoldFilled';
}

export default RefIcon;