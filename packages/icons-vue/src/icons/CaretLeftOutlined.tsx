// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CaretLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CaretLeftOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CaretLeftOutlined: CaretLeftOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CaretLeftOutlinedSvg}></AntdIcon>;
};

CaretLeftOutlined.displayName = 'CaretLeftOutlined';
CaretLeftOutlined.inheritAttrs = false;
export default CaretLeftOutlined;