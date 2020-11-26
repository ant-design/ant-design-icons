// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ToolOutlinedSvg from '@ant-design/icons-svg/lib/asn/ToolOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ToolOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ToolOutlined: ToolOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToolOutlinedSvg}></AntdIcon>;
};

ToolOutlined.displayName = 'ToolOutlined';
ToolOutlined.inheritAttrs = false;
export default ToolOutlined;