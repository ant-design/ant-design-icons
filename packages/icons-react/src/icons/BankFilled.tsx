// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BankFilledSvg from '@ant-design/icons-svg/lib/asn/BankFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BankFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BankFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BankFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BankFilled';
}

export default RefIcon;