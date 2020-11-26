// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CreditCardOutlinedSvg from '@ant-design/icons-svg/lib/asn/CreditCardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CreditCardOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CreditCardOutlined: CreditCardOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CreditCardOutlinedSvg}></AntdIcon>;
};

CreditCardOutlined.displayName = 'CreditCardOutlined';
CreditCardOutlined.inheritAttrs = false;
export default CreditCardOutlined;