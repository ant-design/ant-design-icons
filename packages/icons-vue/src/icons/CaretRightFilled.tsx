// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CaretRightFilledSvg from '@ant-design/icons-svg/lib/asn/CaretRightFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CaretRightFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CaretRightFilled: CaretRightFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CaretRightFilledSvg}></AntdIcon>;
};

CaretRightFilled.displayName = 'CaretRightFilled';
CaretRightFilled.inheritAttrs = false;
export default CaretRightFilled;