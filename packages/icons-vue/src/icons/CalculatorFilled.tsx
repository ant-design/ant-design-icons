// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalculatorFilledSvg from '@ant-design/icons-svg/lib/asn/CalculatorFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalculatorFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalculatorFilled: CalculatorFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalculatorFilledSvg}></AntdIcon>;
};

CalculatorFilled.displayName = 'CalculatorFilled';
CalculatorFilled.inheritAttrs = false;
export default CalculatorFilled;