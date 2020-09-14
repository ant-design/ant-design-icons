// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MenuOutlinedSvg from '@ant-design/icons-svg/lib/asn/MenuOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MenuOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenuOutlinedSvg}></AntdIcon>;
};

MenuOutlined.displayName = 'MenuOutlined';
MenuOutlined.inheritAttrs = false;
export default MenuOutlined;