// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SoundFilledSvg from '@ant-design/icons-svg/lib/asn/SoundFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SoundFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SoundFilled: SoundFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SoundFilledSvg}></AntdIcon>;
};

SoundFilled.displayName = 'SoundFilled';
SoundFilled.inheritAttrs = false;
export default SoundFilled;