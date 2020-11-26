// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SubnodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/SubnodeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SubnodeOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SubnodeOutlined: SubnodeOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SubnodeOutlinedSvg}></AntdIcon>;
};

SubnodeOutlined.displayName = 'SubnodeOutlined';
SubnodeOutlined.inheritAttrs = false;
export default SubnodeOutlined;