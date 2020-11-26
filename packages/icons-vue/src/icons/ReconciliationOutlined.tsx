// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReconciliationOutlinedSvg from '@ant-design/icons-svg/lib/asn/ReconciliationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReconciliationOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReconciliationOutlined: ReconciliationOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReconciliationOutlinedSvg}></AntdIcon>;
};

ReconciliationOutlined.displayName = 'ReconciliationOutlined';
ReconciliationOutlined.inheritAttrs = false;
export default ReconciliationOutlined;