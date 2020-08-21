// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WalletTwoToneSvg from '@ant-design/icons-svg/lib/asn/WalletTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WalletTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletTwoToneSvg}></AntdIcon>;
};

WalletTwoTone.displayName = 'WalletTwoTone';
WalletTwoTone.inheritAttrs = false;
export default WalletTwoTone;