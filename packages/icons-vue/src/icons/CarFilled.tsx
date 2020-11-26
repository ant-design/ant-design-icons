// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CarFilledSvg from '@ant-design/icons-svg/lib/asn/CarFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CarFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CarFilled: CarFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CarFilledSvg}></AntdIcon>;
};

CarFilled.displayName = 'CarFilled';
CarFilled.inheritAttrs = false;
export default CarFilled;