// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VerticalAlignMiddleOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalAlignMiddleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VerticalAlignMiddleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VerticalAlignMiddleOutlined: VerticalAlignMiddleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VerticalAlignMiddleOutlinedSvg}></AntdIcon>;
};

VerticalAlignMiddleOutlined.displayName = 'VerticalAlignMiddleOutlined';
VerticalAlignMiddleOutlined.inheritAttrs = false;
export default VerticalAlignMiddleOutlined;