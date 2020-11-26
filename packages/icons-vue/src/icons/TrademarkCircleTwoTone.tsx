// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrademarkCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/TrademarkCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrademarkCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrademarkCircleTwoTone: TrademarkCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrademarkCircleTwoToneSvg}></AntdIcon>;
};

TrademarkCircleTwoTone.displayName = 'TrademarkCircleTwoTone';
TrademarkCircleTwoTone.inheritAttrs = false;
export default TrademarkCircleTwoTone;