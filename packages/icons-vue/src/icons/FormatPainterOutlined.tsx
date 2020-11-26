// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FormatPainterOutlinedSvg from '@ant-design/icons-svg/lib/asn/FormatPainterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FormatPainterOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FormatPainterOutlined: FormatPainterOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FormatPainterOutlinedSvg}></AntdIcon>;
};

FormatPainterOutlined.displayName = 'FormatPainterOutlined';
FormatPainterOutlined.inheritAttrs = false;
export default FormatPainterOutlined;