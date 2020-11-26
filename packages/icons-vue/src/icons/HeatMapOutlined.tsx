// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeatMapOutlinedSvg from '@ant-design/icons-svg/lib/asn/HeatMapOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeatMapOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeatMapOutlined: HeatMapOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeatMapOutlinedSvg}></AntdIcon>;
};

HeatMapOutlined.displayName = 'HeatMapOutlined';
HeatMapOutlined.inheritAttrs = false;
export default HeatMapOutlined;