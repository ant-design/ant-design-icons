// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CalculatorFilledSvg from '@ant-design/icons-svg/lib/asn/CalculatorFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalculatorFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalculatorFilledSvg}></AntdIcon>;
};

CalculatorFilled.displayName = 'CalculatorFilled';
CalculatorFilled.inheritAttrs = false;
export default CalculatorFilled;