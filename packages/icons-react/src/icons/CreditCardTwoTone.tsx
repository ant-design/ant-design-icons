// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CreditCardTwoToneSvg from '@ant-design/icons-svg/lib/asn/CreditCardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CreditCardTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CreditCardTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CreditCardTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CreditCardTwoTone';
}

export default RefIcon;