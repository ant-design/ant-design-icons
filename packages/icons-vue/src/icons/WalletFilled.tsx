// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WalletFilledSvg from '@ant-design/icons-svg/lib/asn/WalletFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WalletFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletFilledSvg}></AntdIcon>;
};

WalletFilled.displayName = 'WalletFilled';
WalletFilled.inheritAttrs = false;
export default WalletFilled;