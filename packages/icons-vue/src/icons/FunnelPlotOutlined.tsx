// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FunnelPlotOutlinedSvg from '@ant-design/icons-svg/lib/asn/FunnelPlotOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FunnelPlotOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FunnelPlotOutlined: FunnelPlotOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FunnelPlotOutlinedSvg}></AntdIcon>;
};

FunnelPlotOutlined.displayName = 'FunnelPlotOutlined';
FunnelPlotOutlined.inheritAttrs = false;
export default FunnelPlotOutlined;