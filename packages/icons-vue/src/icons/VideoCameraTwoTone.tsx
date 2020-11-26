// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VideoCameraTwoToneSvg from '@ant-design/icons-svg/lib/asn/VideoCameraTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VideoCameraTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VideoCameraTwoTone: VideoCameraTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VideoCameraTwoToneSvg}></AntdIcon>;
};

VideoCameraTwoTone.displayName = 'VideoCameraTwoTone';
VideoCameraTwoTone.inheritAttrs = false;
export default VideoCameraTwoTone;