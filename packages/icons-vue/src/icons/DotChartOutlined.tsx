// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DotChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/DotChartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DotChartOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DotChartOutlined: DotChartOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DotChartOutlinedSvg}></AntdIcon>;
};

DotChartOutlined.displayName = 'DotChartOutlined';
DotChartOutlined.inheritAttrs = false;
export default DotChartOutlined;