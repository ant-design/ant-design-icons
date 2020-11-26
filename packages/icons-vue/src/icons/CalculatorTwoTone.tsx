// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalculatorTwoToneSvg from '@ant-design/icons-svg/lib/asn/CalculatorTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalculatorTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalculatorTwoTone: CalculatorTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalculatorTwoToneSvg}></AntdIcon>;
};

CalculatorTwoTone.displayName = 'CalculatorTwoTone';
CalculatorTwoTone.inheritAttrs = false;
export default CalculatorTwoTone;