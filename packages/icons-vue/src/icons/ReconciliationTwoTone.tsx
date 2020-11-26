// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReconciliationTwoToneSvg from '@ant-design/icons-svg/lib/asn/ReconciliationTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReconciliationTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReconciliationTwoTone: ReconciliationTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReconciliationTwoToneSvg}></AntdIcon>;
};

ReconciliationTwoTone.displayName = 'ReconciliationTwoTone';
ReconciliationTwoTone.inheritAttrs = false;
export default ReconciliationTwoTone;