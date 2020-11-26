// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PieChartFilledSvg from '@ant-design/icons-svg/lib/asn/PieChartFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PieChartFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PieChartFilled: PieChartFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PieChartFilledSvg}></AntdIcon>;
};

PieChartFilled.displayName = 'PieChartFilled';
PieChartFilled.inheritAttrs = false;
export default PieChartFilled;