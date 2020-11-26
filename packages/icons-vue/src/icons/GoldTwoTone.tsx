// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GoldTwoToneSvg from '@ant-design/icons-svg/lib/asn/GoldTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GoldTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GoldTwoTone: GoldTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GoldTwoToneSvg}></AntdIcon>;
};

GoldTwoTone.displayName = 'GoldTwoTone';
GoldTwoTone.inheritAttrs = false;
export default GoldTwoTone;