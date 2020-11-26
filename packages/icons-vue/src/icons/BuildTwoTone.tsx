// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BuildTwoToneSvg from '@ant-design/icons-svg/lib/asn/BuildTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BuildTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BuildTwoTone: BuildTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuildTwoToneSvg}></AntdIcon>;
};

BuildTwoTone.displayName = 'BuildTwoTone';
BuildTwoTone.inheritAttrs = false;
export default BuildTwoTone;