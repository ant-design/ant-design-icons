// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToolFilledSvg from '@ant-design/icons-svg/lib/asn/ToolFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToolFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToolFilled: ToolFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToolFilledSvg}></AntdIcon>;
};

ToolFilled.displayName = 'ToolFilled';
ToolFilled.inheritAttrs = false;
export default ToolFilled;