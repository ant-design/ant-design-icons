// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WalletFilledSvg from '@ant-design/icons-svg/lib/asn/WalletFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WalletFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WalletFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  WalletFilled.displayName = 'WalletFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WalletFilled);