// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BankOutlinedSvg from '@ant-design/icons-svg/lib/asn/BankOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BankOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BankOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BankOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BankOutlined';
}

export default RefIcon;