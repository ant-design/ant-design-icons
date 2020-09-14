// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShoppingFilledSvg from '@ant-design/icons-svg/lib/asn/ShoppingFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShoppingFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingFilledSvg}></AntdIcon>;
};

ShoppingFilled.displayName = 'ShoppingFilled';
ShoppingFilled.inheritAttrs = false;
export default ShoppingFilled;