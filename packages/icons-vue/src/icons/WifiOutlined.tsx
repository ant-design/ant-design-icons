// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WifiOutlinedSvg from '@ant-design/icons-svg/lib/asn/WifiOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WifiOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WifiOutlined: WifiOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WifiOutlinedSvg}></AntdIcon>;
};

WifiOutlined.displayName = 'WifiOutlined';
WifiOutlined.inheritAttrs = false;
export default WifiOutlined;