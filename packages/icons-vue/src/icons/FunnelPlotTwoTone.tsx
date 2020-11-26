// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FunnelPlotTwoToneSvg from '@ant-design/icons-svg/lib/asn/FunnelPlotTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FunnelPlotTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FunnelPlotTwoTone: FunnelPlotTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FunnelPlotTwoToneSvg}></AntdIcon>;
};

FunnelPlotTwoTone.displayName = 'FunnelPlotTwoTone';
FunnelPlotTwoTone.inheritAttrs = false;
export default FunnelPlotTwoTone;