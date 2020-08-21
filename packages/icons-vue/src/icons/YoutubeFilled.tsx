// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import YoutubeFilledSvg from '@ant-design/icons-svg/lib/asn/YoutubeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const YoutubeFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={YoutubeFilledSvg}></AntdIcon>;
};

YoutubeFilled.displayName = 'YoutubeFilled';
YoutubeFilled.inheritAttrs = false;
export default YoutubeFilled;