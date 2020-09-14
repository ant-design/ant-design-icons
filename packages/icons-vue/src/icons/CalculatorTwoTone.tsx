// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CalculatorTwoToneSvg from '@ant-design/icons-svg/lib/asn/CalculatorTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalculatorTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalculatorTwoToneSvg}></AntdIcon>;
};

CalculatorTwoTone.displayName = 'CalculatorTwoTone';
CalculatorTwoTone.inheritAttrs = false;
export default CalculatorTwoTone;