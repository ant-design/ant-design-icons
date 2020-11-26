// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SlidersOutlinedSvg from '@ant-design/icons-svg/lib/asn/SlidersOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SlidersOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SlidersOutlined: SlidersOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SlidersOutlinedSvg}></AntdIcon>;
};

SlidersOutlined.displayName = 'SlidersOutlined';
SlidersOutlined.inheritAttrs = false;
export default SlidersOutlined;