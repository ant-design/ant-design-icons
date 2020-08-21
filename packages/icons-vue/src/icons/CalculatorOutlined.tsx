// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CalculatorOutlinedSvg from '@ant-design/icons-svg/lib/asn/CalculatorOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalculatorOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalculatorOutlinedSvg}></AntdIcon>;
};

CalculatorOutlined.displayName = 'CalculatorOutlined';
CalculatorOutlined.inheritAttrs = false;
export default CalculatorOutlined;