// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShoppingFilledSvg from '@ant-design/icons-svg/lib/asn/ShoppingFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShoppingFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShoppingFilled: ShoppingFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingFilledSvg}></AntdIcon>;
};

ShoppingFilled.displayName = 'ShoppingFilled';
ShoppingFilled.inheritAttrs = false;
export default ShoppingFilled;