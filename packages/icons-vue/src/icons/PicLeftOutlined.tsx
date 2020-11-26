// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PicLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/PicLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PicLeftOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PicLeftOutlined: PicLeftOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PicLeftOutlinedSvg}></AntdIcon>;
};

PicLeftOutlined.displayName = 'PicLeftOutlined';
PicLeftOutlined.inheritAttrs = false;
export default PicLeftOutlined;