// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SoundTwoToneSvg from '@ant-design/icons-svg/lib/asn/SoundTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SoundTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SoundTwoTone: SoundTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SoundTwoToneSvg}></AntdIcon>;
};

SoundTwoTone.displayName = 'SoundTwoTone';
SoundTwoTone.inheritAttrs = false;
export default SoundTwoTone;