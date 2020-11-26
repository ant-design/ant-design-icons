// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GatewayOutlinedSvg from '@ant-design/icons-svg/lib/asn/GatewayOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GatewayOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GatewayOutlined: GatewayOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GatewayOutlinedSvg}></AntdIcon>;
};

GatewayOutlined.displayName = 'GatewayOutlined';
GatewayOutlined.inheritAttrs = false;
export default GatewayOutlined;