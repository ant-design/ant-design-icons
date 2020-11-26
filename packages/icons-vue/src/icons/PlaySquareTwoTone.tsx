// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlaySquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlaySquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlaySquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlaySquareTwoTone: PlaySquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlaySquareTwoToneSvg}></AntdIcon>;
};

PlaySquareTwoTone.displayName = 'PlaySquareTwoTone';
PlaySquareTwoTone.inheritAttrs = false;
export default PlaySquareTwoTone;