// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MedicineBoxTwoToneSvg from '@ant-design/icons-svg/lib/asn/MedicineBoxTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MedicineBoxTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MedicineBoxTwoTone: MedicineBoxTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MedicineBoxTwoToneSvg}></AntdIcon>;
};

MedicineBoxTwoTone.displayName = 'MedicineBoxTwoTone';
MedicineBoxTwoTone.inheritAttrs = false;
export default MedicineBoxTwoTone;