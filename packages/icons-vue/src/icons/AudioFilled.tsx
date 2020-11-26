// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AudioFilledSvg from '@ant-design/icons-svg/lib/asn/AudioFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AudioFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AudioFilled: AudioFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AudioFilledSvg}></AntdIcon>;
};

AudioFilled.displayName = 'AudioFilled';
AudioFilled.inheritAttrs = false;
export default AudioFilled;