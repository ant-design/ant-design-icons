// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WalletOutlinedSvg from '@ant-design/icons-svg/lib/asn/WalletOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WalletOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WalletOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  WalletOutlined.displayName = 'WalletOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WalletOutlined);