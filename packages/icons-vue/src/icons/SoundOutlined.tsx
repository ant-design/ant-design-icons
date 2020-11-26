// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SoundOutlinedSvg from '@ant-design/icons-svg/lib/asn/SoundOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SoundOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SoundOutlined: SoundOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SoundOutlinedSvg}></AntdIcon>;
};

SoundOutlined.displayName = 'SoundOutlined';
SoundOutlined.inheritAttrs = false;
export default SoundOutlined;