// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FontSizeOutlinedSvg from '@ant-design/icons-svg/lib/asn/FontSizeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FontSizeOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FontSizeOutlined: FontSizeOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FontSizeOutlinedSvg}></AntdIcon>;
};

FontSizeOutlined.displayName = 'FontSizeOutlined';
FontSizeOutlined.inheritAttrs = false;
export default FontSizeOutlined;