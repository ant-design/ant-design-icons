// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CustomerServiceTwoToneSvg from '@ant-design/icons-svg/lib/asn/CustomerServiceTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CustomerServiceTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CustomerServiceTwoTone: CustomerServiceTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CustomerServiceTwoToneSvg}></AntdIcon>;
};

CustomerServiceTwoTone.displayName = 'CustomerServiceTwoTone';
CustomerServiceTwoTone.inheritAttrs = false;
export default CustomerServiceTwoTone;