// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RadarChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadarChartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RadarChartOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RadarChartOutlined: RadarChartOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadarChartOutlinedSvg}></AntdIcon>;
};

RadarChartOutlined.displayName = 'RadarChartOutlined';
RadarChartOutlined.inheritAttrs = false;
export default RadarChartOutlined;