// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AccountBookTwoToneSvg from '@ant-design/icons-svg/lib/asn/AccountBookTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccountBookTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AccountBookTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AccountBookTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AccountBookTwoTone';
}

export default RefIcon;