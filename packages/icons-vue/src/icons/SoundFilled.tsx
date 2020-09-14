// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SoundFilledSvg from '@ant-design/icons-svg/lib/asn/SoundFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SoundFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SoundFilledSvg}></AntdIcon>;
};

SoundFilled.displayName = 'SoundFilled';
SoundFilled.inheritAttrs = false;
export default SoundFilled;