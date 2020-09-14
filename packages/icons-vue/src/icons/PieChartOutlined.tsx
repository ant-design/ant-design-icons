// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PieChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/PieChartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PieChartOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PieChartOutlinedSvg}></AntdIcon>;
};

PieChartOutlined.displayName = 'PieChartOutlined';
PieChartOutlined.inheritAttrs = false;
export default PieChartOutlined;