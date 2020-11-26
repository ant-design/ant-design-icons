// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletFilledSvg from '@ant-design/icons-svg/lib/asn/WalletFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletFilled: WalletFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletFilledSvg}></AntdIcon>;
};

WalletFilled.displayName = 'WalletFilled';
WalletFilled.inheritAttrs = false;
export default WalletFilled;