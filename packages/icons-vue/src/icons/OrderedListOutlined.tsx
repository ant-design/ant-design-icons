// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OrderedListOutlinedSvg from '@ant-design/icons-svg/lib/asn/OrderedListOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface OrderedListOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const OrderedListOutlined: OrderedListOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OrderedListOutlinedSvg}></AntdIcon>;
};

OrderedListOutlined.displayName = 'OrderedListOutlined';
OrderedListOutlined.inheritAttrs = false;
export default OrderedListOutlined;