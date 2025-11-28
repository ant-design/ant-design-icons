// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlightFilledSvg from '@ant-design/icons-svg/lib/asn/FlightFilledSvg';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlightFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlightFilled: FlightFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlightFilledSvg}></AntdIcon>;
};

FlightFilled.displayName = 'FlightFilled';
FlightFilled.inheritAttrs = false;
export default FlightFilled;