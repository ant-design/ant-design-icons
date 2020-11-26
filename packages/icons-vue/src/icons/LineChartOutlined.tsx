// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LineChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/LineChartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LineChartOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LineChartOutlined: LineChartOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LineChartOutlinedSvg}></AntdIcon>;
};

LineChartOutlined.displayName = 'LineChartOutlined';
LineChartOutlined.inheritAttrs = false;
export default LineChartOutlined;