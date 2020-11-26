// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoCameraFilledSvg from '@ant-design/icons-svg/lib/asn/VideoCameraFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoCameraFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoCameraFilled: VideoCameraFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoCameraFilledSvg}></AntdIcon>;
};

VideoCameraFilled.displayName = 'VideoCameraFilled';
VideoCameraFilled.inheritAttrs = false;
export default VideoCameraFilled;