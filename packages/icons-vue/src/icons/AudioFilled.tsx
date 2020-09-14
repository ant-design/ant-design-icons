// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AudioFilledSvg from '@ant-design/icons-svg/lib/asn/AudioFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AudioFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AudioFilledSvg}></AntdIcon>;
};

AudioFilled.displayName = 'AudioFilled';
AudioFilled.inheritAttrs = false;
export default AudioFilled;