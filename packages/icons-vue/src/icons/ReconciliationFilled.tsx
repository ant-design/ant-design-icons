// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReconciliationFilledSvg from '@ant-design/icons-svg/lib/asn/ReconciliationFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReconciliationFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReconciliationFilled: ReconciliationFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReconciliationFilledSvg}></AntdIcon>;
};

ReconciliationFilled.displayName = 'ReconciliationFilled';
ReconciliationFilled.inheritAttrs = false;
export default ReconciliationFilled;