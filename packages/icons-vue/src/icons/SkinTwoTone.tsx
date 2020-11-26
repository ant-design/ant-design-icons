// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SkinTwoToneSvg from '@ant-design/icons-svg/lib/asn/SkinTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SkinTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SkinTwoTone: SkinTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SkinTwoToneSvg}></AntdIcon>;
};

SkinTwoTone.displayName = 'SkinTwoTone';
SkinTwoTone.inheritAttrs = false;
export default SkinTwoTone;