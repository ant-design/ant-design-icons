// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlightTwoToneSvg from '@ant-design/icons-svg/lib/asn/FlightTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlightTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlightTwoTone: FlightTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlightTwoToneSvg}></AntdIcon>;
};

FlightTwoTone.displayName = 'FlightTwoTone';
FlightTwoTone.inheritAttrs = false;
export default FlightTwoTone;