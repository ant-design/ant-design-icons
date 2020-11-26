// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AudioMutedOutlinedSvg from '@ant-design/icons-svg/lib/asn/AudioMutedOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AudioMutedOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AudioMutedOutlined: AudioMutedOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AudioMutedOutlinedSvg}></AntdIcon>;
};

AudioMutedOutlined.displayName = 'AudioMutedOutlined';
AudioMutedOutlined.inheritAttrs = false;
export default AudioMutedOutlined;