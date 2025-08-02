// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PinterestOutlinedSvg from '@ant-design/icons-svg/lib/asn/PinterestOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PinterestOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PinterestOutlined: PinterestOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PinterestOutlinedSvg}></AntdIcon>;
};

PinterestOutlined.displayName = 'PinterestOutlined';
PinterestOutlined.inheritAttrs = false;
export default PinterestOutlined;