// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NumberOutlinedSvg from '@ant-design/icons-svg/lib/asn/NumberOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NumberOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NumberOutlinedSvg}></AntdIcon>;
};

NumberOutlined.displayName = 'NumberOutlined';
NumberOutlined.inheritAttrs = false;
export default NumberOutlined;