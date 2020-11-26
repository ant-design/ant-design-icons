// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalculatorOutlinedSvg from '@ant-design/icons-svg/lib/asn/CalculatorOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalculatorOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalculatorOutlined: CalculatorOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalculatorOutlinedSvg}></AntdIcon>;
};

CalculatorOutlined.displayName = 'CalculatorOutlined';
CalculatorOutlined.inheritAttrs = false;
export default CalculatorOutlined;