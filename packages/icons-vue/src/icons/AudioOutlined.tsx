// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AudioOutlinedSvg from '@ant-design/icons-svg/lib/asn/AudioOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AudioOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AudioOutlinedSvg}></AntdIcon>;
};

AudioOutlined.displayName = 'AudioOutlined';
AudioOutlined.inheritAttrs = false;
export default AudioOutlined;