// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CreditCardFilledSvg from '@ant-design/icons-svg/lib/asn/CreditCardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CreditCardFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CreditCardFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CreditCardFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CreditCardFilled';
}

export default RefIcon;