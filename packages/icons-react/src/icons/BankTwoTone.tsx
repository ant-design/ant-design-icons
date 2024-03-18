// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BankTwoToneSvg from '@ant-design/icons-svg/lib/asn/BankTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BankTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BankTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BankTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BankTwoTone';
}

export default RefIcon;