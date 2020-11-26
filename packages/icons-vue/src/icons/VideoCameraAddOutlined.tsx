// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoCameraAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/VideoCameraAddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoCameraAddOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoCameraAddOutlined: VideoCameraAddOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoCameraAddOutlinedSvg}></AntdIcon>;
};

VideoCameraAddOutlined.displayName = 'VideoCameraAddOutlined';
VideoCameraAddOutlined.inheritAttrs = false;
export default VideoCameraAddOutlined;