// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SkinOutlinedSvg from '@ant-design/icons-svg/lib/asn/SkinOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SkinOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SkinOutlined: SkinOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SkinOutlinedSvg}></AntdIcon>;
};

SkinOutlined.displayName = 'SkinOutlined';
SkinOutlined.inheritAttrs = false;
export default SkinOutlined;