// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShopOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShopOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShopOutlined: ShopOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShopOutlinedSvg}></AntdIcon>;
};

ShopOutlined.displayName = 'ShopOutlined';
ShopOutlined.inheritAttrs = false;
export default ShopOutlined;