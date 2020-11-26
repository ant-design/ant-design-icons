// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlayCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayCircleTwoTone: PlayCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayCircleTwoToneSvg}></AntdIcon>;
};

PlayCircleTwoTone.displayName = 'PlayCircleTwoTone';
PlayCircleTwoTone.inheritAttrs = false;
export default PlayCircleTwoTone;