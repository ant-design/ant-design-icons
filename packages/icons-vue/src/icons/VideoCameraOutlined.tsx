// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoCameraOutlinedSvg from '@ant-design/icons-svg/lib/asn/VideoCameraOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoCameraOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoCameraOutlined: VideoCameraOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoCameraOutlinedSvg}></AntdIcon>;
};

VideoCameraOutlined.displayName = 'VideoCameraOutlined';
VideoCameraOutlined.inheritAttrs = false;
export default VideoCameraOutlined;