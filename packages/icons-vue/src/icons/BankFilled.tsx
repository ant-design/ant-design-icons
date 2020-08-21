// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BankFilledSvg from '@ant-design/icons-svg/lib/asn/BankFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BankFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BankFilledSvg}></AntdIcon>;
};

BankFilled.displayName = 'BankFilled';
BankFilled.inheritAttrs = false;
export default BankFilled;