// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HeatMapOutlinedSvg from '@ant-design/icons-svg/lib/asn/HeatMapOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeatMapOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeatMapOutlinedSvg}></AntdIcon>;
};

HeatMapOutlined.displayName = 'HeatMapOutlined';
HeatMapOutlined.inheritAttrs = false;
export default HeatMapOutlined;