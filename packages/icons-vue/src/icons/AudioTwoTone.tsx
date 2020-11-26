// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AudioTwoToneSvg from '@ant-design/icons-svg/lib/asn/AudioTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AudioTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AudioTwoTone: AudioTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AudioTwoToneSvg}></AntdIcon>;
};

AudioTwoTone.displayName = 'AudioTwoTone';
AudioTwoTone.inheritAttrs = false;
export default AudioTwoTone;