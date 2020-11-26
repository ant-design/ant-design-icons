// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BuildFilledSvg from '@ant-design/icons-svg/lib/asn/BuildFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BuildFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BuildFilled: BuildFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuildFilledSvg}></AntdIcon>;
};

BuildFilled.displayName = 'BuildFilled';
BuildFilled.inheritAttrs = false;
export default BuildFilled;