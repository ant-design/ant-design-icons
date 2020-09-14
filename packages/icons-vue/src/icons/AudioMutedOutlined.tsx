// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AudioMutedOutlinedSvg from '@ant-design/icons-svg/lib/asn/AudioMutedOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AudioMutedOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AudioMutedOutlinedSvg}></AntdIcon>;
};

AudioMutedOutlined.displayName = 'AudioMutedOutlined';
AudioMutedOutlined.inheritAttrs = false;
export default AudioMutedOutlined;