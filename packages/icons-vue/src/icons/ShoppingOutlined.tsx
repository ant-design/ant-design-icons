// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShoppingOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShoppingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShoppingOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingOutlinedSvg}></AntdIcon>;
};

ShoppingOutlined.displayName = 'ShoppingOutlined';
ShoppingOutlined.inheritAttrs = false;
export default ShoppingOutlined;