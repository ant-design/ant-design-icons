// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EnvironmentTwoToneSvg from '@ant-design/icons-svg/lib/asn/EnvironmentTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EnvironmentTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EnvironmentTwoTone: EnvironmentTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EnvironmentTwoToneSvg}></AntdIcon>;
};

EnvironmentTwoTone.displayName = 'EnvironmentTwoTone';
EnvironmentTwoTone.inheritAttrs = false;
export default EnvironmentTwoTone;