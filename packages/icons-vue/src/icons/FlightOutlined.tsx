// GENERATE BY ./scripts/generate.ts
// DO NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlightOutlinedSvg from '@ant-design/icons-svg/lib/asn/FlightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlightOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlightOutlined: FlightOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlightOutlinedSvg}></AntdIcon>;
};

FlightOutlined.displayName = 'FlightOutlined';
FlightOutlined.inheritAttrs = false;
export default FlightOutlined;