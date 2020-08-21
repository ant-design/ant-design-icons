// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MedicineBoxFilledSvg from '@ant-design/icons-svg/lib/asn/MedicineBoxFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MedicineBoxFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MedicineBoxFilledSvg}></AntdIcon>;
};

MedicineBoxFilled.displayName = 'MedicineBoxFilled';
MedicineBoxFilled.inheritAttrs = false;
export default MedicineBoxFilled;