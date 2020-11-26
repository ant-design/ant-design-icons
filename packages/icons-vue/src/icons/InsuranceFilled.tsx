// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InsuranceFilledSvg from '@ant-design/icons-svg/lib/asn/InsuranceFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InsuranceFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InsuranceFilled: InsuranceFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InsuranceFilledSvg}></AntdIcon>;
};

InsuranceFilled.displayName = 'InsuranceFilled';
InsuranceFilled.inheritAttrs = false;
export default InsuranceFilled;