// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletTwoToneSvg from '@ant-design/icons-svg/lib/asn/WalletTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletTwoTone: WalletTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletTwoToneSvg}></AntdIcon>;
};

WalletTwoTone.displayName = 'WalletTwoTone';
WalletTwoTone.inheritAttrs = false;
export default WalletTwoTone;