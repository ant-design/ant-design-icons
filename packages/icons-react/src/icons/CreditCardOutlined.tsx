// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CreditCardOutlinedSvg from '@ant-design/icons-svg/lib/asn/CreditCardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CreditCardOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CreditCardOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CreditCardOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CreditCardOutlined';
}

export default RefIcon;