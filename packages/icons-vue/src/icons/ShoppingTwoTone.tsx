// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShoppingTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShoppingTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShoppingTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShoppingTwoTone: ShoppingTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingTwoToneSvg}></AntdIcon>;
};

ShoppingTwoTone.displayName = 'ShoppingTwoTone';
ShoppingTwoTone.inheritAttrs = false;
export default ShoppingTwoTone;