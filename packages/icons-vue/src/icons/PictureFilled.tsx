// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PictureFilledSvg from '@ant-design/icons-svg/lib/asn/PictureFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PictureFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PictureFilled: PictureFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PictureFilledSvg}></AntdIcon>;
};

PictureFilled.displayName = 'PictureFilled';
PictureFilled.inheritAttrs = false;
export default PictureFilled;