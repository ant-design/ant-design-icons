// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BankFilledSvg from '@ant-design/icons-svg/lib/asn/BankFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BankFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BankFilled: BankFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BankFilledSvg}></AntdIcon>;
};

BankFilled.displayName = 'BankFilled';
BankFilled.inheritAttrs = false;
export default BankFilled;