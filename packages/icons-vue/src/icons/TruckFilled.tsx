// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckFilledSvg from '@ant-design/icons-svg/lib/asn/TruckFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckFilled: TruckFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckFilledSvg}></AntdIcon>;
};

TruckFilled.displayName = 'TruckFilled';
TruckFilled.inheritAttrs = false;
export default TruckFilled;