// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PictureOutlinedSvg from '@ant-design/icons-svg/lib/asn/PictureOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PictureOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PictureOutlined: PictureOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PictureOutlinedSvg}></AntdIcon>;
};

PictureOutlined.displayName = 'PictureOutlined';
PictureOutlined.inheritAttrs = false;
export default PictureOutlined;