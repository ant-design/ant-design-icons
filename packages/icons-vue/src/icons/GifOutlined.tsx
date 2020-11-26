// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GifOutlinedSvg from '@ant-design/icons-svg/lib/asn/GifOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GifOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GifOutlined: GifOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GifOutlinedSvg}></AntdIcon>;
};

GifOutlined.displayName = 'GifOutlined';
GifOutlined.inheritAttrs = false;
export default GifOutlined;