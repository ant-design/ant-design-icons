// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BranchesOutlinedSvg from '@ant-design/icons-svg/lib/asn/BranchesOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BranchesOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BranchesOutlinedSvg}></AntdIcon>;
};

BranchesOutlined.displayName = 'BranchesOutlined';
BranchesOutlined.inheritAttrs = false;
export default BranchesOutlined;