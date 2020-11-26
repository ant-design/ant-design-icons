// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SkinFilledSvg from '@ant-design/icons-svg/lib/asn/SkinFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SkinFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SkinFilled: SkinFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SkinFilledSvg}></AntdIcon>;
};

SkinFilled.displayName = 'SkinFilled';
SkinFilled.inheritAttrs = false;
export default SkinFilled;