// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CustomerServiceFilledSvg from '@ant-design/icons-svg/lib/asn/CustomerServiceFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CustomerServiceFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CustomerServiceFilled: CustomerServiceFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CustomerServiceFilledSvg}></AntdIcon>;
};

CustomerServiceFilled.displayName = 'CustomerServiceFilled';
CustomerServiceFilled.inheritAttrs = false;
export default CustomerServiceFilled;