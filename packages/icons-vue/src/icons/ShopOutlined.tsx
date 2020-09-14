// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShopOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShopOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShopOutlinedSvg}></AntdIcon>;
};

ShopOutlined.displayName = 'ShopOutlined';
ShopOutlined.inheritAttrs = false;
export default ShopOutlined;