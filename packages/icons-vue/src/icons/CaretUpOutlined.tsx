// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CaretUpOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretUpOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CaretUpOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CaretUpOutlined: CaretUpOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CaretUpOutlinedSvg}></AntdIcon>;
};

CaretUpOutlined.displayName = 'CaretUpOutlined';
CaretUpOutlined.inheritAttrs = false;
export default CaretUpOutlined;