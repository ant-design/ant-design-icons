// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CarryOutTwoToneSvg from '@ant-design/icons-svg/lib/asn/CarryOutTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CarryOutTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CarryOutTwoTone: CarryOutTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CarryOutTwoToneSvg}></AntdIcon>;
};

CarryOutTwoTone.displayName = 'CarryOutTwoTone';
CarryOutTwoTone.inheritAttrs = false;
export default CarryOutTwoTone;