// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CustomerServiceOutlinedSvg from '@ant-design/icons-svg/lib/asn/CustomerServiceOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CustomerServiceOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CustomerServiceOutlined: CustomerServiceOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CustomerServiceOutlinedSvg}></AntdIcon>;
};

CustomerServiceOutlined.displayName = 'CustomerServiceOutlined';
CustomerServiceOutlined.inheritAttrs = false;
export default CustomerServiceOutlined;