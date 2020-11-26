// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PicCenterOutlinedSvg from '@ant-design/icons-svg/lib/asn/PicCenterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PicCenterOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PicCenterOutlined: PicCenterOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PicCenterOutlinedSvg}></AntdIcon>;
};

PicCenterOutlined.displayName = 'PicCenterOutlined';
PicCenterOutlined.inheritAttrs = false;
export default PicCenterOutlined;