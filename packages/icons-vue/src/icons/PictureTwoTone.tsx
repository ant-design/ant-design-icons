// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PictureTwoToneSvg from '@ant-design/icons-svg/lib/asn/PictureTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PictureTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PictureTwoTone: PictureTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PictureTwoToneSvg}></AntdIcon>;
};

PictureTwoTone.displayName = 'PictureTwoTone';
PictureTwoTone.inheritAttrs = false;
export default PictureTwoTone;