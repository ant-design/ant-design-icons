// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrademarkOutlinedSvg from '@ant-design/icons-svg/lib/asn/TrademarkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrademarkOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrademarkOutlined: TrademarkOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrademarkOutlinedSvg}></AntdIcon>;
};

TrademarkOutlined.displayName = 'TrademarkOutlined';
TrademarkOutlined.inheritAttrs = false;
export default TrademarkOutlined;