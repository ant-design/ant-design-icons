// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NumberOutlinedSvg from '@ant-design/icons-svg/lib/asn/NumberOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NumberOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NumberOutlined: NumberOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NumberOutlinedSvg}></AntdIcon>;
};

NumberOutlined.displayName = 'NumberOutlined';
NumberOutlined.inheritAttrs = false;
export default NumberOutlined;