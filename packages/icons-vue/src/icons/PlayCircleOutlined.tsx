// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlayCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlayCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlayCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlayCircleOutlined: PlayCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayCircleOutlinedSvg}></AntdIcon>;
};

PlayCircleOutlined.displayName = 'PlayCircleOutlined';
PlayCircleOutlined.inheritAttrs = false;
export default PlayCircleOutlined;