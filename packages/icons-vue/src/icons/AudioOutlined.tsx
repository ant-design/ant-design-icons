// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AudioOutlinedSvg from '@ant-design/icons-svg/lib/asn/AudioOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AudioOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AudioOutlined: AudioOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AudioOutlinedSvg}></AntdIcon>;
};

AudioOutlined.displayName = 'AudioOutlined';
AudioOutlined.inheritAttrs = false;
export default AudioOutlined;