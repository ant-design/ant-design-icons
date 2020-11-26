// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeTwoToneSvg from '@ant-design/icons-svg/lib/asn/LikeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeTwoTone: LikeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeTwoToneSvg}></AntdIcon>;
};

LikeTwoTone.displayName = 'LikeTwoTone';
LikeTwoTone.inheritAttrs = false;
export default LikeTwoTone;