// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AccountBookFilledSvg from '@ant-design/icons-svg/lib/asn/AccountBookFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccountBookFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AccountBookFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AccountBookFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AccountBookFilled';
}

export default RefIcon;