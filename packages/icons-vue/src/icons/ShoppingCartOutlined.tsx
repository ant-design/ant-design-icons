// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShoppingCartOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShoppingCartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShoppingCartOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingCartOutlinedSvg}></AntdIcon>;
};

ShoppingCartOutlined.displayName = 'ShoppingCartOutlined';
ShoppingCartOutlined.inheritAttrs = false;
export default ShoppingCartOutlined;