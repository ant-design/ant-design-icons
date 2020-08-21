// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MedicineBoxOutlinedSvg from '@ant-design/icons-svg/lib/asn/MedicineBoxOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MedicineBoxOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MedicineBoxOutlinedSvg}></AntdIcon>;
};

MedicineBoxOutlined.displayName = 'MedicineBoxOutlined';
MedicineBoxOutlined.inheritAttrs = false;
export default MedicineBoxOutlined;