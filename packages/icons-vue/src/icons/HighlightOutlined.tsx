// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HighlightOutlinedSvg from '@ant-design/icons-svg/lib/asn/HighlightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HighlightOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HighlightOutlined: HighlightOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HighlightOutlinedSvg}></AntdIcon>;
};

HighlightOutlined.displayName = 'HighlightOutlined';
HighlightOutlined.inheritAttrs = false;
export default HighlightOutlined;