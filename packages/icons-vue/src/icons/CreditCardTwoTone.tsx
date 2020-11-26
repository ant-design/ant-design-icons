// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CreditCardTwoToneSvg from '@ant-design/icons-svg/lib/asn/CreditCardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CreditCardTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CreditCardTwoTone: CreditCardTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CreditCardTwoToneSvg}></AntdIcon>;
};

CreditCardTwoTone.displayName = 'CreditCardTwoTone';
CreditCardTwoTone.inheritAttrs = false;
export default CreditCardTwoTone;