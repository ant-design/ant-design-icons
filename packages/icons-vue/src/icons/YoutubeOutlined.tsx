// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import YoutubeOutlinedSvg from '@ant-design/icons-svg/lib/asn/YoutubeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface YoutubeOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const YoutubeOutlined: YoutubeOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={YoutubeOutlinedSvg}></AntdIcon>;
};

YoutubeOutlined.displayName = 'YoutubeOutlined';
YoutubeOutlined.inheritAttrs = false;
export default YoutubeOutlined;