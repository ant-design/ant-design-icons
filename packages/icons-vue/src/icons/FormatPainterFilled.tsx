// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FormatPainterFilledSvg from '@ant-design/icons-svg/lib/asn/FormatPainterFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FormatPainterFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FormatPainterFilled: FormatPainterFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FormatPainterFilledSvg}></AntdIcon>;
};

FormatPainterFilled.displayName = 'FormatPainterFilled';
FormatPainterFilled.inheritAttrs = false;
export default FormatPainterFilled;