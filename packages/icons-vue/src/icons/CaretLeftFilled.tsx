// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CaretLeftFilledSvg from '@ant-design/icons-svg/lib/asn/CaretLeftFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CaretLeftFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CaretLeftFilled: CaretLeftFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CaretLeftFilledSvg}></AntdIcon>;
};

CaretLeftFilled.displayName = 'CaretLeftFilled';
CaretLeftFilled.inheritAttrs = false;
export default CaretLeftFilled;