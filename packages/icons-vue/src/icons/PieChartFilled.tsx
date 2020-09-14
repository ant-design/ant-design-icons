// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PieChartFilledSvg from '@ant-design/icons-svg/lib/asn/PieChartFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PieChartFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PieChartFilledSvg}></AntdIcon>;
};

PieChartFilled.displayName = 'PieChartFilled';
PieChartFilled.inheritAttrs = false;
export default PieChartFilled;