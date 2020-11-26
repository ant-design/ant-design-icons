// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BgColorsOutlinedSvg from '@ant-design/icons-svg/lib/asn/BgColorsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BgColorsOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BgColorsOutlined: BgColorsOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BgColorsOutlinedSvg}></AntdIcon>;
};

BgColorsOutlined.displayName = 'BgColorsOutlined';
BgColorsOutlined.inheritAttrs = false;
export default BgColorsOutlined;