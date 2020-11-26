// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SolutionOutlinedSvg from '@ant-design/icons-svg/lib/asn/SolutionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SolutionOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SolutionOutlined: SolutionOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SolutionOutlinedSvg}></AntdIcon>;
};

SolutionOutlined.displayName = 'SolutionOutlined';
SolutionOutlined.inheritAttrs = false;
export default SolutionOutlined;