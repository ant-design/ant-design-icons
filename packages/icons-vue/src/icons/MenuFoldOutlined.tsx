// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MenuFoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/MenuFoldOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MenuFoldOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MenuFoldOutlined: MenuFoldOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuFoldOutlinedSvg}></AntdIcon>;
};

MenuFoldOutlined.displayName = 'MenuFoldOutlined';
MenuFoldOutlined.inheritAttrs = false;
export default MenuFoldOutlined;