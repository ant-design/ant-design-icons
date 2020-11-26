// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CaretUpFilledSvg from '@ant-design/icons-svg/lib/asn/CaretUpFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CaretUpFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CaretUpFilled: CaretUpFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CaretUpFilledSvg}></AntdIcon>;
};

CaretUpFilled.displayName = 'CaretUpFilled';
CaretUpFilled.inheritAttrs = false;
export default CaretUpFilled;