// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BankTwoToneSvg from '@ant-design/icons-svg/lib/asn/BankTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BankTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BankTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BankTwoTone.displayName = 'BankTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BankTwoTone);