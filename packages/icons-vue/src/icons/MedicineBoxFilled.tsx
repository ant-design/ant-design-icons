// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MedicineBoxFilledSvg from '@ant-design/icons-svg/lib/asn/MedicineBoxFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MedicineBoxFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MedicineBoxFilled: MedicineBoxFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MedicineBoxFilledSvg}></AntdIcon>;
};

MedicineBoxFilled.displayName = 'MedicineBoxFilled';
MedicineBoxFilled.inheritAttrs = false;
export default MedicineBoxFilled;