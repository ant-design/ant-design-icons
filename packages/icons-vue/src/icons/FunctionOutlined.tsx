// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FunctionOutlinedSvg from '@ant-design/icons-svg/lib/asn/FunctionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FunctionOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FunctionOutlined: FunctionOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FunctionOutlinedSvg}></AntdIcon>;
};

FunctionOutlined.displayName = 'FunctionOutlined';
FunctionOutlined.inheritAttrs = false;
export default FunctionOutlined;