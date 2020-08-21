// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CreditCardFilledSvg from '@ant-design/icons-svg/lib/asn/CreditCardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CreditCardFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CreditCardFilledSvg}></AntdIcon>;
};

CreditCardFilled.displayName = 'CreditCardFilled';
CreditCardFilled.inheritAttrs = false;
export default CreditCardFilled;