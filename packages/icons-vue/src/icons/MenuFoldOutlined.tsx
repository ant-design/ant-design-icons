// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MenuFoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/MenuFoldOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MenuFoldOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuFoldOutlinedSvg}></AntdIcon>;
};

MenuFoldOutlined.displayName = 'MenuFoldOutlined';
MenuFoldOutlined.inheritAttrs = false;
export default MenuFoldOutlined;