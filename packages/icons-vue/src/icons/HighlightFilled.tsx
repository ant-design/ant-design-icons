// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HighlightFilledSvg from '@ant-design/icons-svg/lib/asn/HighlightFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HighlightFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HighlightFilled: HighlightFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HighlightFilledSvg}></AntdIcon>;
};

HighlightFilled.displayName = 'HighlightFilled';
HighlightFilled.inheritAttrs = false;
export default HighlightFilled;