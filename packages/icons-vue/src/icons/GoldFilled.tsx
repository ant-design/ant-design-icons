// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GoldFilledSvg from '@ant-design/icons-svg/lib/asn/GoldFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GoldFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GoldFilled: GoldFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GoldFilledSvg}></AntdIcon>;
};

GoldFilled.displayName = 'GoldFilled';
GoldFilled.inheritAttrs = false;
export default GoldFilled;