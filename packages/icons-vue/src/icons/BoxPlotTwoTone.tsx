// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxPlotTwoToneSvg from '@ant-design/icons-svg/lib/asn/BoxPlotTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxPlotTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxPlotTwoTone: BoxPlotTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxPlotTwoToneSvg}></AntdIcon>;
};

BoxPlotTwoTone.displayName = 'BoxPlotTwoTone';
BoxPlotTwoTone.inheritAttrs = false;
export default BoxPlotTwoTone;