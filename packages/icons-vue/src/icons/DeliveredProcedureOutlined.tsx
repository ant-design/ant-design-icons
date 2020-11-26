// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DeliveredProcedureOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeliveredProcedureOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DeliveredProcedureOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DeliveredProcedureOutlined: DeliveredProcedureOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeliveredProcedureOutlinedSvg}></AntdIcon>;
};

DeliveredProcedureOutlined.displayName = 'DeliveredProcedureOutlined';
DeliveredProcedureOutlined.inheritAttrs = false;
export default DeliveredProcedureOutlined;