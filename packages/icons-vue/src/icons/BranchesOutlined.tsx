// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BranchesOutlinedSvg from '@ant-design/icons-svg/lib/asn/BranchesOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BranchesOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BranchesOutlined: BranchesOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BranchesOutlinedSvg}></AntdIcon>;
};

BranchesOutlined.displayName = 'BranchesOutlined';
BranchesOutlined.inheritAttrs = false;
export default BranchesOutlined;