// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MenuUnfoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/MenuUnfoldOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MenuUnfoldOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MenuUnfoldOutlined: MenuUnfoldOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuUnfoldOutlinedSvg}></AntdIcon>;
};

MenuUnfoldOutlined.displayName = 'MenuUnfoldOutlined';
MenuUnfoldOutlined.inheritAttrs = false;
export default MenuUnfoldOutlined;