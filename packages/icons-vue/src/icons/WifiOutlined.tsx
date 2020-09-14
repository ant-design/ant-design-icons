// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WifiOutlinedSvg from '@ant-design/icons-svg/lib/asn/WifiOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WifiOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WifiOutlinedSvg}></AntdIcon>;
};

WifiOutlined.displayName = 'WifiOutlined';
WifiOutlined.inheritAttrs = false;
export default WifiOutlined;