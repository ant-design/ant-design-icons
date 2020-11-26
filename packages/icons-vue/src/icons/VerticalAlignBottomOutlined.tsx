// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VerticalAlignBottomOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalAlignBottomOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VerticalAlignBottomOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VerticalAlignBottomOutlined: VerticalAlignBottomOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VerticalAlignBottomOutlinedSvg}></AntdIcon>;
};

VerticalAlignBottomOutlined.displayName = 'VerticalAlignBottomOutlined';
VerticalAlignBottomOutlined.inheritAttrs = false;
export default VerticalAlignBottomOutlined;