// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NodeExpandOutlinedSvg from '@ant-design/icons-svg/lib/asn/NodeExpandOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NodeExpandOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NodeExpandOutlined: NodeExpandOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NodeExpandOutlinedSvg}></AntdIcon>;
};

NodeExpandOutlined.displayName = 'NodeExpandOutlined';
NodeExpandOutlined.inheritAttrs = false;
export default NodeExpandOutlined;