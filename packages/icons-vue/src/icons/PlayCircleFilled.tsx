// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PlayCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayCircleFilled: PlayCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayCircleFilledSvg}></AntdIcon>;
};

PlayCircleFilled.displayName = 'PlayCircleFilled';
PlayCircleFilled.inheritAttrs = false;
export default PlayCircleFilled;