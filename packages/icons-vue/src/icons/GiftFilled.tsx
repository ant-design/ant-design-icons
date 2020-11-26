// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GiftFilledSvg from '@ant-design/icons-svg/lib/asn/GiftFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GiftFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GiftFilled: GiftFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GiftFilledSvg}></AntdIcon>;
};

GiftFilled.displayName = 'GiftFilled';
GiftFilled.inheritAttrs = false;
export default GiftFilled;