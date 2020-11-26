// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CaretDownFilledSvg from '@ant-design/icons-svg/lib/asn/CaretDownFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CaretDownFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CaretDownFilled: CaretDownFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CaretDownFilledSvg}></AntdIcon>;
};

CaretDownFilled.displayName = 'CaretDownFilled';
CaretDownFilled.inheritAttrs = false;
export default CaretDownFilled;