// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CaretRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CaretRightOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CaretRightOutlined: CaretRightOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CaretRightOutlinedSvg}></AntdIcon>;
};

CaretRightOutlined.displayName = 'CaretRightOutlined';
CaretRightOutlined.inheritAttrs = false;
export default CaretRightOutlined;