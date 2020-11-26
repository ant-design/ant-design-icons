// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NodeCollapseOutlinedSvg from '@ant-design/icons-svg/lib/asn/NodeCollapseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NodeCollapseOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NodeCollapseOutlined: NodeCollapseOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NodeCollapseOutlinedSvg}></AntdIcon>;
};

NodeCollapseOutlined.displayName = 'NodeCollapseOutlined';
NodeCollapseOutlined.inheritAttrs = false;
export default NodeCollapseOutlined;