// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FunnelPlotFilledSvg from '@ant-design/icons-svg/lib/asn/FunnelPlotFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FunnelPlotFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FunnelPlotFilled: FunnelPlotFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FunnelPlotFilledSvg}></AntdIcon>;
};

FunnelPlotFilled.displayName = 'FunnelPlotFilled';
FunnelPlotFilled.inheritAttrs = false;
export default FunnelPlotFilled;