// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MenuOutlinedSvg from '@ant-design/icons-svg/lib/asn/MenuOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MenuOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MenuOutlined: MenuOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuOutlinedSvg}></AntdIcon>;
};

MenuOutlined.displayName = 'MenuOutlined';
MenuOutlined.inheritAttrs = false;
export default MenuOutlined;