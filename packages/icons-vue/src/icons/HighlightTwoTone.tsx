// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HighlightTwoToneSvg from '@ant-design/icons-svg/lib/asn/HighlightTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HighlightTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HighlightTwoTone: HighlightTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HighlightTwoToneSvg}></AntdIcon>;
};

HighlightTwoTone.displayName = 'HighlightTwoTone';
HighlightTwoTone.inheritAttrs = false;
export default HighlightTwoTone;