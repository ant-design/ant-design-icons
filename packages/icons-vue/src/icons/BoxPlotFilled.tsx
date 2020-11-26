// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxPlotFilledSvg from '@ant-design/icons-svg/lib/asn/BoxPlotFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxPlotFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxPlotFilled: BoxPlotFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxPlotFilledSvg}></AntdIcon>;
};

BoxPlotFilled.displayName = 'BoxPlotFilled';
BoxPlotFilled.inheritAttrs = false;
export default BoxPlotFilled;