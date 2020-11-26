// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShoppingOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShoppingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShoppingOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShoppingOutlined: ShoppingOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingOutlinedSvg}></AntdIcon>;
};

ShoppingOutlined.displayName = 'ShoppingOutlined';
ShoppingOutlined.inheritAttrs = false;
export default ShoppingOutlined;