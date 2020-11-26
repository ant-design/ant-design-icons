// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShopFilledSvg from '@ant-design/icons-svg/lib/asn/ShopFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShopFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShopFilled: ShopFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShopFilledSvg}></AntdIcon>;
};

ShopFilled.displayName = 'ShopFilled';
ShopFilled.inheritAttrs = false;
export default ShopFilled;