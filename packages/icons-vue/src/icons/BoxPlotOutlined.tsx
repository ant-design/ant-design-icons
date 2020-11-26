// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxPlotOutlinedSvg from '@ant-design/icons-svg/lib/asn/BoxPlotOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxPlotOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxPlotOutlined: BoxPlotOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxPlotOutlinedSvg}></AntdIcon>;
};

BoxPlotOutlined.displayName = 'BoxPlotOutlined';
BoxPlotOutlined.inheritAttrs = false;
export default BoxPlotOutlined;