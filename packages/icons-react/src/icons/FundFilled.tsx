// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FundFilledSvg from '@ant-design/icons-svg/lib/asn/FundFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FundFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FundFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FundFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FundFilled';
}

export default RefIcon;