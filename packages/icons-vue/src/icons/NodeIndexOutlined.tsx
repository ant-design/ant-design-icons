// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NodeIndexOutlinedSvg from '@ant-design/icons-svg/lib/asn/NodeIndexOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NodeIndexOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NodeIndexOutlined: NodeIndexOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NodeIndexOutlinedSvg}></AntdIcon>;
};

NodeIndexOutlined.displayName = 'NodeIndexOutlined';
NodeIndexOutlined.inheritAttrs = false;
export default NodeIndexOutlined;