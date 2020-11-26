// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CarryOutOutlinedSvg from '@ant-design/icons-svg/lib/asn/CarryOutOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CarryOutOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CarryOutOutlined: CarryOutOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CarryOutOutlinedSvg}></AntdIcon>;
};

CarryOutOutlined.displayName = 'CarryOutOutlined';
CarryOutOutlined.inheritAttrs = false;
export default CarryOutOutlined;