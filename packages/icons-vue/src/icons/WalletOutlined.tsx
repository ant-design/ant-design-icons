// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WalletOutlinedSvg from '@ant-design/icons-svg/lib/asn/WalletOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WalletOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WalletOutlined: WalletOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletOutlinedSvg}></AntdIcon>;
};

WalletOutlined.displayName = 'WalletOutlined';
WalletOutlined.inheritAttrs = false;
export default WalletOutlined;