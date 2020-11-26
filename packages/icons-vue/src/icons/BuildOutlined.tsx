// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BuildOutlinedSvg from '@ant-design/icons-svg/lib/asn/BuildOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BuildOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BuildOutlined: BuildOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuildOutlinedSvg}></AntdIcon>;
};

BuildOutlined.displayName = 'BuildOutlined';
BuildOutlined.inheritAttrs = false;
export default BuildOutlined;