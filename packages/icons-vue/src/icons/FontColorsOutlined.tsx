// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FontColorsOutlinedSvg from '@ant-design/icons-svg/lib/asn/FontColorsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FontColorsOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FontColorsOutlined: FontColorsOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FontColorsOutlinedSvg}></AntdIcon>;
};

FontColorsOutlined.displayName = 'FontColorsOutlined';
FontColorsOutlined.inheritAttrs = false;
export default FontColorsOutlined;