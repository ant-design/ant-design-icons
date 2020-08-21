// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SoundTwoToneSvg from '@ant-design/icons-svg/lib/asn/SoundTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SoundTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SoundTwoToneSvg}></AntdIcon>;
};

SoundTwoTone.displayName = 'SoundTwoTone';
SoundTwoTone.inheritAttrs = false;
export default SoundTwoTone;