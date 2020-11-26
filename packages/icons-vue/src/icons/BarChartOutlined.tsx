// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BarChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/BarChartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BarChartOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BarChartOutlined: BarChartOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BarChartOutlinedSvg}></AntdIcon>;
};

BarChartOutlined.displayName = 'BarChartOutlined';
BarChartOutlined.inheritAttrs = false;
export default BarChartOutlined;