// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SolutionOutlinedSvg from '@ant-design/icons-svg/lib/asn/SolutionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SolutionOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SolutionOutlinedSvg}></AntdIcon>;
};

SolutionOutlined.displayName = 'SolutionOutlined';
SolutionOutlined.inheritAttrs = false;
export default SolutionOutlined;