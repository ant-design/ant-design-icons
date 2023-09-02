// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WalletTwoToneSvg from '@ant-design/icons-svg/lib/asn/WalletTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WalletTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WalletTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  WalletTwoTone.displayName = 'WalletTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WalletTwoTone);