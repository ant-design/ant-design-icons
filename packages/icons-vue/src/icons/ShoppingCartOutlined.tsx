// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShoppingCartOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShoppingCartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShoppingCartOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShoppingCartOutlined: ShoppingCartOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingCartOutlinedSvg}></AntdIcon>;
};

ShoppingCartOutlined.displayName = 'ShoppingCartOutlined';
ShoppingCartOutlined.inheritAttrs = false;
export default ShoppingCartOutlined;