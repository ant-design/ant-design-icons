// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CarOutlinedSvg from '@ant-design/icons-svg/lib/asn/CarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CarOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CarOutlined: CarOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CarOutlinedSvg}></AntdIcon>;
};

CarOutlined.displayName = 'CarOutlined';
CarOutlined.inheritAttrs = false;
export default CarOutlined;