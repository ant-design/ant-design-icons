// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShrinkOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShrinkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShrinkOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShrinkOutlined: ShrinkOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShrinkOutlinedSvg}></AntdIcon>;
};

ShrinkOutlined.displayName = 'ShrinkOutlined';
ShrinkOutlined.inheritAttrs = false;
export default ShrinkOutlined;