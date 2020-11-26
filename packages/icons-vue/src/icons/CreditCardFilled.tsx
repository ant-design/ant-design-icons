// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CreditCardFilledSvg from '@ant-design/icons-svg/lib/asn/CreditCardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CreditCardFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CreditCardFilled: CreditCardFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CreditCardFilledSvg}></AntdIcon>;
};

CreditCardFilled.displayName = 'CreditCardFilled';
CreditCardFilled.inheritAttrs = false;
export default CreditCardFilled;