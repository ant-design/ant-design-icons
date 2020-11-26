// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RocketTwoToneSvg from '@ant-design/icons-svg/lib/asn/RocketTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RocketTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RocketTwoTone: RocketTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RocketTwoToneSvg}></AntdIcon>;
};

RocketTwoTone.displayName = 'RocketTwoTone';
RocketTwoTone.inheritAttrs = false;
export default RocketTwoTone;