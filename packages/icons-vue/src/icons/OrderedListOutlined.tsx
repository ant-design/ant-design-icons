// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import OrderedListOutlinedSvg from '@ant-design/icons-svg/lib/asn/OrderedListOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OrderedListOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OrderedListOutlinedSvg}></AntdIcon>;
};

OrderedListOutlined.displayName = 'OrderedListOutlined';
OrderedListOutlined.inheritAttrs = false;
export default OrderedListOutlined;