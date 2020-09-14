// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FunnelPlotFilledSvg from '@ant-design/icons-svg/lib/asn/FunnelPlotFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FunnelPlotFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FunnelPlotFilledSvg}></AntdIcon>;
};

FunnelPlotFilled.displayName = 'FunnelPlotFilled';
FunnelPlotFilled.inheritAttrs = false;
export default FunnelPlotFilled;