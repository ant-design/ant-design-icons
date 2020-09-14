// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GatewayOutlinedSvg from '@ant-design/icons-svg/lib/asn/GatewayOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GatewayOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GatewayOutlinedSvg}></AntdIcon>;
};

GatewayOutlined.displayName = 'GatewayOutlined';
GatewayOutlined.inheritAttrs = false;
export default GatewayOutlined;