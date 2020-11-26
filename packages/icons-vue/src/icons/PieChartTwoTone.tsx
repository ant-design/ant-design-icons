// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PieChartTwoToneSvg from '@ant-design/icons-svg/lib/asn/PieChartTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PieChartTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PieChartTwoTone: PieChartTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PieChartTwoToneSvg}></AntdIcon>;
};

PieChartTwoTone.displayName = 'PieChartTwoTone';
PieChartTwoTone.inheritAttrs = false;
export default PieChartTwoTone;