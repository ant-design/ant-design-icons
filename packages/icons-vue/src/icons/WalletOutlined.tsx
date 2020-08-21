// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WalletOutlinedSvg from '@ant-design/icons-svg/lib/asn/WalletOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WalletOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletOutlinedSvg}></AntdIcon>;
};

WalletOutlined.displayName = 'WalletOutlined';
WalletOutlined.inheritAttrs = false;
export default WalletOutlined;