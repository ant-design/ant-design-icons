// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PieChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/PieChartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PieChartOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PieChartOutlined: PieChartOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PieChartOutlinedSvg}></AntdIcon>;
};

PieChartOutlined.displayName = 'PieChartOutlined';
PieChartOutlined.inheritAttrs = false;
export default PieChartOutlined;