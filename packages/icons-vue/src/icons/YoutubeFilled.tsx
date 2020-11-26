// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import YoutubeFilledSvg from '@ant-design/icons-svg/lib/asn/YoutubeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface YoutubeFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const YoutubeFilled: YoutubeFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={YoutubeFilledSvg}></AntdIcon>;
};

YoutubeFilled.displayName = 'YoutubeFilled';
YoutubeFilled.inheritAttrs = false;
export default YoutubeFilled;