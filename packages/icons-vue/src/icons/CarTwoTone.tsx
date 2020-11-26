// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CarTwoToneSvg from '@ant-design/icons-svg/lib/asn/CarTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CarTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CarTwoTone: CarTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CarTwoToneSvg}></AntdIcon>;
};

CarTwoTone.displayName = 'CarTwoTone';
CarTwoTone.inheritAttrs = false;
export default CarTwoTone;