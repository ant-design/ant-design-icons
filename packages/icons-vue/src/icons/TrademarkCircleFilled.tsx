// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrademarkCircleFilledSvg from '@ant-design/icons-svg/lib/asn/TrademarkCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrademarkCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrademarkCircleFilled: TrademarkCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrademarkCircleFilledSvg}></AntdIcon>;
};

TrademarkCircleFilled.displayName = 'TrademarkCircleFilled';
TrademarkCircleFilled.inheritAttrs = false;
export default TrademarkCircleFilled;