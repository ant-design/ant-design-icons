// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShopFilledSvg from '@ant-design/icons-svg/lib/asn/ShopFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShopFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShopFilledSvg}></AntdIcon>;
};

ShopFilled.displayName = 'ShopFilled';
ShopFilled.inheritAttrs = false;
export default ShopFilled;