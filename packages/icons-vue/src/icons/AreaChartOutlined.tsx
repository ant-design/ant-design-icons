// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AreaChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/AreaChartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AreaChartOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AreaChartOutlined: AreaChartOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AreaChartOutlinedSvg}></AntdIcon>;
};

AreaChartOutlined.displayName = 'AreaChartOutlined';
AreaChartOutlined.inheritAttrs = false;
export default AreaChartOutlined;