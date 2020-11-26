// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PicRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/PicRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PicRightOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PicRightOutlined: PicRightOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PicRightOutlinedSvg}></AntdIcon>;
};

PicRightOutlined.displayName = 'PicRightOutlined';
PicRightOutlined.inheritAttrs = false;
export default PicRightOutlined;