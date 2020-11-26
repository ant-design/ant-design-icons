// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrademarkCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/TrademarkCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrademarkCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrademarkCircleOutlined: TrademarkCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrademarkCircleOutlinedSvg}></AntdIcon>;
};

TrademarkCircleOutlined.displayName = 'TrademarkCircleOutlined';
TrademarkCircleOutlined.inheritAttrs = false;
export default TrademarkCircleOutlined;